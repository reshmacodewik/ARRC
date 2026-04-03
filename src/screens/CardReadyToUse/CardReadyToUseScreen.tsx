import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import styles from './Style/style';
import { IMAGES } from '../../constants/images';
import Button from '../../components/Button/Button';
import { wp } from '../../utils/responsive';

const CardReadyToUseScreen = ({ navigation }: any) => {
  const handleStartCollecting = () => {
    navigation.navigate('Home');
    console.log('Card is ready. Transitioning to app main...');
  };
  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            source={IMAGES.logo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.heading}>
            ARRC VIRTUAL DEBIT CARD{'\n'}
            IS READY TO USE
          </Text>
        </View>
        <View style={styles.cardsContainer}>
          <Image
            source={IMAGES.blackCardTilted}
            style={styles.backgroundCard}
            resizeMode="contain"
          />
          <Image
            source={IMAGES.crownCardTilted}
            style={styles.foregroundCard}
            resizeMode="contain"
          />
        </View>

        <View style={styles.bottomSection}>
          <Button
            title="Start Collecting Rewards"
            onPress={handleStartCollecting}
            style={{ width: wp(75) }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default CardReadyToUseScreen;
