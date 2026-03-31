import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Button from '../../components/Button/Button';
import styles from '../Welcome/Style/style';
import { IMAGES } from '../../constants/images';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.cardWrapper}>
          <View style={styles.glow} />

          <Image source={IMAGES.CARDBLACK} style={styles.backCard} />
          <Image source={IMAGES.cardBrown} style={styles.frontCard} />
        </View>
        <Text style={styles.title}>Welcome To ARRC</Text>

        <Text style={styles.subtitle}>
          Let's Embark On Your Rewarding Adventure!
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;
