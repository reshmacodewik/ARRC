import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { IMAGES } from '../../../constants/images';
import { COLORS } from '../../../constants/colors';
import styles from './Style/style';

const IdVerificationScreen = ({ navigation }: any) => {

  const handleUpload = () => {
    // Handle gallery / document picker
  };

  const handleCamera = () => {
    // Handle camera launch
    navigation.navigate('FaceVerificationScreen')
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


        <Text style={styles.heading}>
          Upload A Photo Of Your{'\n'}National ID Card
        </Text>
        <Text style={styles.subheading}>
          Regulations Require You To Upload A National ID Card .{'\n'}
          Don't Worry Your Data Will Stay Safe & Private
        </Text>


        <TouchableOpacity
          style={styles.uploadBox}
          onPress={handleUpload}
          activeOpacity={0.8}
        >
          <Feather
            name="upload"
            size={32}
            color="#8A8A8A"
            style={styles.uploadIcon}
          />
          <Text style={styles.uploadText}>Upload A National ID Card</Text>
        </TouchableOpacity>
        <View style={styles.orRow}>
          <View style={styles.orLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.orLine} />
        </View>


        <TouchableOpacity
          style={styles.cameraButton}
          onPress={handleCamera}
          activeOpacity={0.85}
        >
          <LinearGradient
            colors={[COLORS.goldGradientStart, COLORS.primary, COLORS.goldGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.cameraButtonGradient}
          >
            <Ionicons name="camera-outline" size={22} color="#1A1A1A" />
            <Text style={styles.cameraButtonText}>
              Open Camera & Take {'\n'}Pictures
            </Text>
          </LinearGradient>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default IdVerificationScreen;
