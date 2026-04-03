import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import { COLORS } from '../constants/colors';
import Feather from 'react-native-vector-icons/Feather';
import ProfileScreen from '../screens/Tab/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const PlaceholderScreen = () => (
  <View style={{ flex: 1, backgroundColor: COLORS.background }} />
);

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBarContent}>
        <View style={styles.glassBackground} />

        {state.routes.map((route: any, index: number) => {
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

          let iconName: any = 'help-circle';
          let label = route.name;

          if (route.name === 'HomeTab') {
            iconName = 'home';
            label = 'Home';
          } else if (route.name === 'Card') {
            iconName = 'credit-card';
            label = 'Card';
          } else if (route.name === 'Education') {
            iconName = 'book-open';
            label = 'Education';
          } else if (route.name === 'Account') {
            iconName = 'user';
            label = 'Account';
          }

          return (
            <TouchableOpacity
              key={index}
              onPress={onPress}
              activeOpacity={0.8}
              style={styles.tabItem}
            >
              <View
                style={[
                  styles.iconContainer,
                  isFocused && styles.iconContainerActive,
                ]}
              >
                <Feather
                  name={iconName}
                  size={19}
                  color={isFocused ? COLORS.black : COLORS.white}
                />
              </View>

              <Text style={styles.tabLabel} numberOfLines={1}>
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
      <Tab.Screen name="Account" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
  },

  tabBarContent: {
    flexDirection: 'row',
    borderRadius: 40,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    overflow: 'hidden',

    // Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 15,
  },

  // ✅ Glass effect (instead of BlurView)
  glassBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20,20,20,0.75)',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
  },

  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C49C51',
  },

  iconContainerActive: {
    backgroundColor: '#F9EDB4',
  },

  tabLabel: {
    marginTop: 4,
    fontSize: 11,
    color: COLORS.white,
    fontWeight: '500',
    includeFontPadding: false,
  },
});

export default TabNavigator;