import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={IMAGES.logo} style={styles.logo} />
      <View style={styles.headerRight}>
        <Icon name="notifications-outline" size={24} color={COLORS.white} />
        <View style={[styles.avatar, { overflow: 'hidden' }]}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} style={{ width: '100%', height: '100%' }} />
        </View>
      </View>
    </View>
  );
};

export default Header;
