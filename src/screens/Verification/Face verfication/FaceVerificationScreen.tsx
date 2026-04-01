import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../../constants/images';
import { COLORS } from '../../../constants/colors';
import { wp } from '../../../utils/responsive';
import styles from './Style/style';
import Button from '../../../components/Button/Button';

const FaceVerificationScreen = ({ navigation }: any) => {

  const handleGetStarted = () => {
    navigation.navigate('LinkAccount');
  };

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.75}
        >
          <LinearGradient
            colors={['#BE9748', '#BE9748']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.backButtonGradient}
          >
            <Ionicons name="chevron-back" size={20} color={COLORS.white} />
          </LinearGradient>
        </TouchableOpacity>

        <Text style={styles.heading}>Face Verification</Text>
        <Text style={styles.subheading}>
          Please Look Into The Camera And Hold Still
        </Text>
        <View style={styles.glowContainer}>
          <Image
            source={IMAGES.faceGlow}
            style={styles.glowImage}
            resizeMode="contain"
          />
          <View style={styles.faceIconWrapper}>
            <Image
              source={IMAGES.faceIcon}
              style={styles.faceIconImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.bottomArea}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('LinkAccount')}
          />
        </View>

      </View>
    </ImageBackground>
  );
};

export default FaceVerificationScreen;
