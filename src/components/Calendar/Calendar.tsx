import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

const FULL_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

const getDaysInMonth = (month: number, year: number): number =>
  new Date(year, month + 1, 0).getDate();

const getFirstDayOfMonth = (month: number, year: number): number =>
  new Date(year, month, 1).getDay();

const generateYears = (): number[] => {
  const current = new Date().getFullYear();
  return Array.from({ length: 20 }, (_, i) => current - 10 + i);
};

const Calendar: React.FC<CalendarProps> = ({ onDateSelect, selectedDate }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(
    selectedDate ? selectedDate.getMonth() : today.getMonth(),
  );
  const [currentYear, setCurrentYear] = useState(
    selectedDate ? selectedDate.getFullYear() : today.getFullYear(),
  );
  const [selected, setSelected] = useState<Date | undefined>(selectedDate);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

  const prevMonthDays = getDaysInMonth(
    currentMonth === 0 ? 11 : currentMonth - 1,
    currentMonth === 0 ? currentYear - 1 : currentYear,
  );

  const goToPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const goToNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  const handleDayPress = (day: number, isCurrentMonth: boolean) => {
    let month = currentMonth;
    let year = currentYear;
    if (!isCurrentMonth && day > 20) {
      month = currentMonth === 0 ? 11 : currentMonth - 1;
      year = currentMonth === 0 ? currentYear - 1 : currentYear;
    } else if (!isCurrentMonth && day < 10) {
      month = currentMonth === 11 ? 0 : currentMonth + 1;
      year = currentMonth === 11 ? currentYear + 1 : currentYear;
    }
    const date = new Date(year, month, day);
    setSelected(date);
    onDateSelect?.(date);
  };

  const isSelected = (day: number, isCurrentMonth: boolean): boolean => {
    if (!selected || !isCurrentMonth) return false;
    return (
      selected.getDate() === day &&
      selected.getMonth() === currentMonth &&
      selected.getFullYear() === currentYear
    );
  };

  const isToday = (day: number, isCurrentMonth: boolean): boolean => {
    if (!isCurrentMonth) return false;
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const cells: { day: number; isCurrentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, isCurrentMonth: false });
  }

  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, isCurrentMonth: true });
  }

  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, isCurrentMonth: false });
  }

  const weeks: (typeof cells)[] = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }

  const visibleWeeks =
    weeks.length === 6 && weeks[5].every(c => !c.isCurrentMonth)
      ? weeks.slice(0, 5)
      : weeks;

  return (
    <View style={calStyles.container}>
      <View style={calStyles.navRow}>
        <TouchableOpacity
          onPress={goToPrev}
          style={calStyles.navBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Icon name="chevron-back" size={18} color="#333" />
        </TouchableOpacity>

        <TouchableOpacity
          style={calStyles.pickerBtn}
          onPress={() => {
            setShowMonthPicker(v => !v);
            setShowYearPicker(false);
          }}
        >
          <Text style={calStyles.pickerText}>{FULL_MONTHS[currentMonth]}</Text>
          <Icon
            name="chevron-down"
            size={12}
            color="#555"
            style={{ marginLeft: 2 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={calStyles.pickerBtn}
          onPress={() => {
            setShowYearPicker(v => !v);
            setShowMonthPicker(false);
          }}
        >
          <Text style={calStyles.pickerText}>{currentYear}</Text>
          <Icon
            name="chevron-down"
            size={12}
            color="#555"
            style={{ marginLeft: 2 }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={goToNext}
          style={calStyles.navBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Icon name="chevron-forward" size={18} color="#333" />
        </TouchableOpacity>
      </View>

      {showMonthPicker && (
        <View style={calStyles.dropdown}>
          {FULL_MONTHS.map((m, i) => (
            <TouchableOpacity
              key={m}
              style={[
                calStyles.dropdownItem,
                i === currentMonth && calStyles.dropdownItemActive,
              ]}
              onPress={() => {
                setCurrentMonth(i);
                setShowMonthPicker(false);
              }}
            >
              <Text
                style={[
                  calStyles.dropdownText,
                  i === currentMonth && calStyles.dropdownTextActive,
                ]}
              >
                {m}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {showYearPicker && (
        <View style={calStyles.dropdown}>
          {generateYears().map(y => (
            <TouchableOpacity
              key={y}
              style={[
                calStyles.dropdownItem,
                y === currentYear && calStyles.dropdownItemActive,
              ]}
              onPress={() => {
                setCurrentYear(y);
                setShowYearPicker(false);
              }}
            >
              <Text
                style={[
                  calStyles.dropdownText,
                  y === currentYear && calStyles.dropdownTextActive,
                ]}
              >
                {y}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <View style={calStyles.dayHeaderRow}>
        {DAYS.map(d => (
          <View key={d} style={calStyles.dayHeaderCell}>
            <Text style={calStyles.dayHeaderText}>{d}</Text>
          </View>
        ))}
      </View>

      {visibleWeeks.map((week, wi) => (
        <View key={wi} style={calStyles.weekRow}>
          {week.map((cell, di) => {
            const sel = isSelected(cell.day, cell.isCurrentMonth);
            const tod = isToday(cell.day, cell.isCurrentMonth);
            return (
              <TouchableOpacity
                key={di}
                style={calStyles.dayCell}
                onPress={() => handleDayPress(cell.day, cell.isCurrentMonth)}
                activeOpacity={0.7}
              >
                <View
                  style={[
                    calStyles.dayInner,
                    sel && calStyles.dayInnerSelected,
                    tod && !sel && calStyles.dayInnerToday,
                  ]}
                >
                  <Text
                    style={[
                      calStyles.dayText,
                      !cell.isCurrentMonth && calStyles.dayTextOverflow,
                      sel && calStyles.dayTextSelected,
                      tod && !sel && calStyles.dayTextToday,
                    ]}
                  >
                    {cell.day}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const CELL_SIZE = Math.floor((width - 40 - 32) / 7);

const calStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    width: '100%',
  },

  navRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  navBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 35,
    paddingVertical: 6,
    gap: 0,
  },
  pickerText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#222',
  },

  dropdown: {
    position: 'absolute',
    top: 56,
    left: 40,
    right: 40,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    zIndex: 999,
    maxHeight: 200,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
    overflow: 'scroll' as any,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  dropdownItemActive: {
    backgroundColor: '#f5ead8',
  },
  dropdownText: {
    fontSize: 14,
    color: '#333',
  },
  dropdownTextActive: {
    color: '#C49C51',
    fontWeight: '700',
  },

  dayHeaderRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  dayHeaderCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 4,
  },
  dayHeaderText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#888',
  },
  weekRow: {
    flexDirection: 'row',
  },
  dayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 0,
  },
  dayInner: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: CELL_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayInnerSelected: {
    backgroundColor: '#C49C51',
    borderRadius: 10,
  },
  dayInnerToday: {
    backgroundColor: '#f5ead8',
    borderRadius: 10,
  },
  dayText: {
    fontSize: 14,
    color: '#222',
    fontWeight: '400',
  },
  dayTextOverflow: {
    color: '#ccc',
  },
  dayTextSelected: {
    color: '#fff',
    fontWeight: '700',
  },
  dayTextToday: {
    color: '#C49C51',
    fontWeight: '600',
  },
});

export default Calendar;
