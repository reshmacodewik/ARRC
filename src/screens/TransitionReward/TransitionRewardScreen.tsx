import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Animated,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { IMAGES } from '../../constants/images';
import HeaderBack from '../../components/Header/HeaderBack';
import { BAR_COLORS, BAR_SECTION_HEIGHT, colors, styles } from './styles';
import Calendar from '../../components/Calendar/Calendar';

interface BarData {
  label: string;
  heightPercent: number;
}

interface Transaction {
  id: string;
  title: string;
  subText: string;
  amount: string;
  reward: string;
  iconLetter: string;
  avatarColor: string;
}

const barData: BarData[] = [
  { label: 'Groceries', heightPercent: 0.92 },
  { label: 'Dining', heightPercent: 0.75 },
  { label: 'Shopping', heightPercent: 0.55 },
  { label: 'Travel', heightPercent: 0.38 },
  { label: 'Others', heightPercent: 0.24 },
];

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Starbucks',
    subText: 'Coffee Purchase . March 16',
    amount: '$320',
    reward: '$15',
    iconLetter: 'S',
    avatarColor: colors.avatarMid,
  },
  {
    id: '2',
    title: 'Amazon',
    subText: 'Shopping . March 10',
    amount: '$320',
    reward: '$15',
    iconLetter: 'A',
    avatarColor: colors.avatarDark,
  },
  {
    id: '3',
    title: 'Dominoz Pizza',
    subText: 'Pizza . March 6',
    amount: '$320',
    reward: '$15',
    iconLetter: 'D',
    avatarColor: colors.avatarDark,
  },
  {
    id: '4',
    title: 'Flipkart',
    subText: 'Shopping . March 4',
    amount: '$320',
    reward: '$15',
    iconLetter: 'F',
    avatarColor: colors.avatarDark,
  },
  {
    id: '5',
    title: 'PVR Cinema',
    subText: 'Movie . March 2',
    amount: '$320',
    reward: '$15',
    iconLetter: 'P',
    avatarColor: colors.avatarDark,
  },
];
const TransitionRewardScreen: React.FC = () => {
  const navigation = useNavigation();
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const slideAnim = React.useRef(new Animated.Value(60)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const openCalendar = () => {
    setCalendarVisible(true);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const closeCalendar = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 0.8,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start(() => setCalendarVisible(false));
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    closeCalendar();
  };

  const formatSelectedDate = (): string => {
    if (!selectedDate) return '';
    return selectedDate.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.root}
      resizeMode="cover"
    >
      <ScrollView
        style={styles.root}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <HeaderBack
          showBack
          title="Transition & Reward"
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.chartSection}>
          <View style={styles.barsRow}>
            {barData.map((item, index) => {
              const barHeight = Math.round(
                item.heightPercent * (BAR_SECTION_HEIGHT - 28),
              );
              return (
                <View key={item.label} style={styles.barCol}>
                  <LinearGradient
                    colors={BAR_COLORS[index]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={[styles.bar, { height: barHeight }]}
                  />
                  <Text style={styles.barLabel}>{item.label}</Text>
                </View>
              );
            })}
          </View>
        </View>

        <View style={styles.toggleRow}>
          <TouchableOpacity activeOpacity={0.85} style={styles.toggleGold}>
            <LinearGradient
              colors={['#C49C51', '#000000']}
              style={styles.toggleGoldInner}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Text style={styles.toggleLabelLight}>This Month Spend</Text>
              <Text style={styles.toggleValueLight}>$300</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85} style={styles.toggleWhite}>
            <Text style={styles.toggleLabelDark}>Reward Earned</Text>
            <Text style={styles.toggleValueDark}>$300</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Transition & Reward History</Text>
          <TouchableOpacity style={styles.calendarBtn} onPress={openCalendar}>
            <Icon name="calendar-outline" size={18} color={colors.gold} />
          </TouchableOpacity>
        </View>

        <View style={styles.listWrapper}>
          {transactions.map(item => (
            <View key={item.id} style={styles.txItem}>
              <View
                style={[styles.txAvatar, { backgroundColor: item.avatarColor }]}
              >
                <Text style={styles.txAvatarText}>{item.iconLetter}</Text>
              </View>

              <View style={styles.txInfo}>
                <Text style={styles.txTitle}>{item.title}</Text>
                <Text style={styles.txSub}>{item.subText}</Text>
              </View>

              <View style={styles.txRight}>
                <View style={styles.txAmountPill}>
                  <Text style={styles.txAmountText}>{item.amount}</Text>
                </View>
                <View style={styles.txRewardRow}>
                  <Text style={styles.txRewardLabel}>Reward </Text>
                  <Text style={styles.txRewardValue}>{item.reward}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      {calendarVisible && (
        <Modal
          transparent
          visible={calendarVisible}
          animationType="none"
          onRequestClose={closeCalendar}
        >
          <TouchableWithoutFeedback onPress={closeCalendar}>
            <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
              <TouchableWithoutFeedback onPress={() => {}}>
                <Animated.View
                  style={[
                    styles.popupContainer,
                    {
                      transform: [{ scale: scaleAnim }],
                    },
                  ]}
                >
                  {/* Handle removed (not needed for popup) */}

                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Select Date</Text>
                    <TouchableOpacity onPress={closeCalendar}>
                      <Icon name="close" size={20} color="#555" />
                    </TouchableOpacity>
                  </View>

                  <Calendar
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </ImageBackground>
  );
};

export default TransitionRewardScreen;
