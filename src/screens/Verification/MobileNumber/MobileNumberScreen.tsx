import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { IMAGES } from '../../../constants/images';
import { COLORS } from '../../../constants/colors';
import styles from './Styles/style';
import Button from '../../../components/Button/Button';
import Layout from '../../../components/Layout/layout';
import Ionicons from 'react-native-vector-icons/Ionicons';
const MobileNumberScreen = ({ navigation }: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    // Navigate to OTP screen
    // navigation.navigate('OTPScreen');
  };

  return (

    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >

      <View style={styles.container}>
        <View style={styles.heroWrapper}>
          <LinearGradient
            colors={['#2C2000', '#1A1200', '#0A0A00', '#2C2000']}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.radialGlow}
          />

          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
            activeOpacity={0.75}
          >
            <LinearGradient
              colors={['#BE9748', '#BE9748']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Ionicons name="chevron-back" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.heroTitle}>ARRC Card</Text>
          <Image
            source={IMAGES.handCard}
            style={styles.handImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.heading}>Enter Your Mobile Number</Text>
          <Text style={styles.subheading}>
            Access Your Account Through Your{'\n'}Phone Number
          </Text>
          <View style={styles.inputRow}>
            <View style={styles.countryBox}>
              <Text style={styles.flagEmoji}>🇺🇸</Text>
              <Ionicons name="chevron-down-sharp" size={20} color="black" />
            </View>


            <TextInput
              style={styles.phoneInput}
              placeholder=""
              placeholderTextColor="#888"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              maxLength={15}
            />
          </View>


          <View style={styles.buttonContainer}>
            <Button
              title="Send OTP"
              onPress={() => navigation.navigate('OTPVerification')}
            />
          </View>

        </View>
      </View>

    </ImageBackground>

  );
};

export default MobileNumberScreen;
