import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home/HomeScreen';
import { COLORS } from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();


const PlaceholderScreen = () => <View style={{ flex: 1, backgroundColor: COLORS.background }} />;

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBarContent}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          let iconName = 'help-circle-outline';
          let label = route.name;

          if (route.name === 'HomeTab') {
            iconName = isFocused ? 'home' : 'home-outline';
            label = 'Home';
          } else if (route.name === 'Card') {
            iconName = isFocused ? 'card' : 'card-outline';
          } else if (route.name === 'Education') {
            iconName = isFocused ? 'book-open' : 'book-open';
            label = 'Education Hub';
          } else if (route.name === 'Account') {
            iconName = isFocused ? 'person' : 'person-outline';
          }

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              style={styles.tabItem}
            >
              <View style={[styles.iconContainer, isFocused ? styles.iconContainerActive : null]}>
                <Feather
                  name={iconName}
                  size={24}
                  color={isFocused ? COLORS.black : COLORS.white}
                />
              </View>
              <Text style={styles.tabLabel}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Card" component={PlaceholderScreen} />
      <Tab.Screen name="Education" component={PlaceholderScreen} />
      <Tab.Screen name="Account" component={PlaceholderScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabBarContent: {
    flexDirection: 'row',
    backgroundColor: '#0F0F0F',
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
    width: '100%',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    backgroundColor: '#C49C51',
  },
  iconContainerActive: {
    backgroundColor: COLORS.primary,
  },
  tabLabel: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '500',
  },
});

export default TabNavigator;
