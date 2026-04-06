import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Header from '../../../../components/Header/Header';
import HeaderBack from '../../../../components/Header/HeaderBack';
import { IMAGES } from '../../../../constants/images';
import styles from './Styles';
import { COLORS } from '../../../../constants/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SUPPORT_MENU = [{ label: 'Support Ticket', route: 'SupportTicketList' }];

const ArrowRight = () => (
  <View style={styles.menuArrowCircle}>
    <Ionicons name="chevron-forward" size={20} color={COLORS.white} />
  </View>
);

const SupportScreen: React.FC = ({ navigation }: any) => {
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
        <HeaderBack
          showBack
          title="Support"
          onBackPress={() => navigation.goBack()}
        />

        <View style={styles.screenPadding}>
          {SUPPORT_MENU.map(item => (
            <TouchableOpacity
              key={item.route}
              style={styles.menuItem}
              activeOpacity={0.8}
              onPress={() => navigation.navigate(item.route)}
            >
              <Text style={styles.menuItemText}>{item.label}</Text>
              <ArrowRight />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SupportScreen;
