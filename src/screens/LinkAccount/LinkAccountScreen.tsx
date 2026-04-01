import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';
import styles from './Style/style';

const LinkAccountScreen = ({ navigation }: any) => {
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [routingNumber, setRoutingNumber] = useState('');
  const [accountType, setAccountType] = useState('Checking'); // Default selected type

  const handleSkip = () => {
    // skip action
    console.log("Skipped link account");
    navigation.navigate('CardReadyToUse')
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

        <Text style={styles.heading}>Linked Your Bank Account</Text>
        <Text style={styles.subheading}>
          To Get Rewards & More Benefits, Securely Link Your
          Account , Don't Worry If You Skip You Can Do This Step
          Later On.
        </Text>


        <ScrollView
          style={styles.inputContainer}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Bank Name</Text>
            <TextInput
              style={styles.textInput}
              value={bankName}
              onChangeText={setBankName}
            />
          </View>


          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Account Number</Text>
            <TextInput
              style={styles.textInput}
              value={accountNumber}
              onChangeText={setAccountNumber}
              keyboardType="number-pad"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Account Type</Text>
            <TouchableOpacity style={styles.dropdownInput} activeOpacity={0.8}>
              <Text style={styles.dropdownText}>{accountType}</Text>
              <Ionicons name="chevron-down" size={20} color={COLORS.black} />
            </TouchableOpacity>
          </View>


          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Routing Number</Text>
            <TextInput
              style={styles.textInput}
              value={routingNumber}
              onChangeText={setRoutingNumber}
              keyboardType="number-pad"
            />
          </View>


          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.orLine} />
          </View>


          <TouchableOpacity
            style={styles.skipButton}
            onPress={handleSkip}
            activeOpacity={0.75}
          >
            <Text style={styles.skipButtonText}>Skip For Now</Text>
          </TouchableOpacity>
          <View style={{ height: 40 }} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default LinkAccountScreen;
