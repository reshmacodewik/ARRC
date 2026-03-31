import React from 'react';
import { View, StatusBar, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from '../Layout/style';
import { COLORS } from '../../constants/colors';

const Layout = ({ children }: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'light-content'}
        backgroundColor={COLORS.background}
      />
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

export default Layout;