import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../../constants/images';
import { COLORS } from '../../../constants/colors';
import Button from '../../../components/Button/Button';
import styles from './Style/style';

const OTPVerificationScreen = ({ navigation }: any) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30);
  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null]);

  /* ── Countdown timer ────────────────────────────────────── */
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const formatTimer = (seconds: number) => {
    const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
    const ss = String(seconds % 60).padStart(2, '0');
    return `${mm} : ${ss}`;
  };

  /* ── OTP input handling ─────────────────────────────────── */
  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    // Auto-advance to next box
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    navigation.navigate('IdVerification');
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(['', '', '', '']);
    inputRefs.current[0]?.focus();
  };

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        {/* ─── Back Button ─────────────────────────────────── */}
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
            <Ionicons name="chevron-back" size={22} color={COLORS.white} />
          </LinearGradient>
        </TouchableOpacity>


        <View style={styles.illustrationWrapper}>
          <Image
            source={IMAGES.otpIllustration}
            style={styles.otpImage}
            resizeMode="contain"
          />
        </View>


        <Text style={styles.heading}>OTP Verification</Text>
        <Text style={styles.subheading}>
          OTP Sent Successfully To Registed{'\n'}Mobile Number
        </Text>


        <View style={styles.otpRow}>
          {otp.map((digit, index) => (
            <View key={index} style={styles.otpBox}>
              <TextInput
                ref={ref => {
                  inputRefs.current[index] = ref;
                }}
                style={styles.otpInput}
                value={digit}
                onChangeText={text => handleOtpChange(text.slice(-1), index)}
                onKeyPress={e => handleKeyPress(e, index)}
                keyboardType="numeric"
                maxLength={1}

                caretHidden
              />
            </View>
          ))}
        </View>


        <Text style={styles.timer}>{formatTimer(timer)}</Text>


        <View style={styles.buttonContainer}>
          <Button
            title="Verify OTP"
            onPress={handleVerify}
          />
        </View>


        <TouchableOpacity style={styles.resendRow} onPress={handleResend} activeOpacity={0.7}>
          <Text style={styles.resendText}>Don't Receive ? </Text>
          <Text style={styles.resendBold}>Resend OTP</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default OTPVerificationScreen;
