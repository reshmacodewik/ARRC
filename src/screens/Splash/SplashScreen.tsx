import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import styles from '../Splash/Style/style';
import { IMAGES } from '../../constants/images';

const SplashScreen = ({ navigation }: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Welcome');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={IMAGES.logo} style={styles.logo} />
      </View>
    </ImageBackground>
  );
};

export default SplashScreen;
