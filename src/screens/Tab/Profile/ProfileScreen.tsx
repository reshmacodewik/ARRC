import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  Switch,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import { IMAGES } from '../../../constants/images';
import Header from '../../../components/Header/Header';
import HeaderBack from '../../../components/Header/HeaderBack';

const MENU_ITEMS = [
  { id: 'edit', label: 'Edit My Profile', hasArrow: true },
  { id: 'privacy', label: 'Privacy Policy', hasArrow: true },
  { id: 'terms', label: 'Terms & Condition', hasArrow: true },
  { id: 'support', label: 'Support Ticket', hasArrow: true },
  { id: 'logout', label: 'Logout', hasArrow: true },
];

const ProfileScreen: React.FC = ({ navigation }: any) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const handleMenuPress = (id: string) => {
    switch (id) {
      case 'edit':
        navigation?.navigate('EditProfile');
        break;
      case 'privacy':
        navigation?.navigate('PrivacyPolicy');
        break;
      case 'terms':
        navigation?.navigate('TermsConditions');
        break;
      case 'support':
        navigation?.navigate('Support');
        break;
      case 'logout':
        break;
    }
  };

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <HeaderBack showBack onBackPress={() => navigation.goBack()} />
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <Text style={styles.userName}>Alex Amiri</Text>
          <Text style={styles.userPhone}>+1 xxx xxx xx25</Text>
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.menuItem}>
            <Text style={styles.menuLabel}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: '#ccc', true: '#34C759' }}
              thumbColor="#fff"
              ios_backgroundColor="#ccc"
              style={styles.switch}
            />
          </View>

          {MENU_ITEMS.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuItem}
              activeOpacity={0.7}
              onPress={() => handleMenuPress(item.id)}
            >
              <Text style={styles.menuLabel}>{item.label}</Text>
              <View style={styles.arrowCircle}>
                <Text style={styles.arrowIcon}>›</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default ProfileScreen;
