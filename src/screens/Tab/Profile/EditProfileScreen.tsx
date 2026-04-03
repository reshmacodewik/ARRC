import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../../../constants/colors';
import styles from './EditProfileStyles';
import Header from '../../../components/Header/Header';
import { IMAGES } from '../../../constants/images';
import HeaderBack from '../../../components/Header/HeaderBack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const GENDER_OPTIONS = ['Male', 'Female', 'Other'];
const COUNTRY_OPTIONS = ['United States', 'India', 'UK', 'Canada'];

const EditProfileScreen: React.FC = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('Alex Amiri');
  const [mobile, setMobile] = useState('+1 236 526 3255');
  const [email, setEmail] = useState('Alexamiri@Gmail.Com');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('Florida');
  const [address, setAddress] = useState('23, Abv Hok');

  const [showGender, setShowGender] = useState(false);
  const [showCountry, setShowCountry] = useState(false);

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <HeaderBack
          showBack
          title="Edit my Profile"
          onBackPress={() => navigation.goBack()}
        />
        <View style={styles.avatarSection}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../../assets/images/avatar.png')}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <TouchableOpacity style={styles.editIconBtn}>
            <LinearGradient
              colors={[COLORS.goldGradientStart, COLORS.goldGradientEnd]}
              style={styles.editIconGradient}
            >
              <Text style={styles.editIconText}>✎</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.fieldLabel}>Full Name</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={fullName}
              onChangeText={setFullName}
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>
          <Text style={styles.fieldLabel}>Mobile Number</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              keyboardType="phone-pad"
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>
          <Text style={styles.fieldLabel}>Email Address</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>
          <Text style={styles.fieldLabel}>Gender</Text>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => {
              setShowGender(!showGender);
              setShowCountry(false);
            }}
            activeOpacity={0.8}
          >
            <Text
              style={[styles.input, !gender && { color: COLORS.textSecondary }]}
            >
              {gender || 'Select'}
            </Text>
            <Ionicons name="chevron-down" size={20} color={COLORS.black} />
          </TouchableOpacity>
          {showGender && (
            <View style={styles.dropdownList}>
              {GENDER_OPTIONS.map(opt => (
                <TouchableOpacity
                  key={opt}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setGender(opt);
                    setShowGender(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <Text style={styles.fieldLabel}>Country</Text>
          <TouchableOpacity
            style={styles.inputBox}
            onPress={() => {
              setShowCountry(!showCountry);
              setShowGender(false);
            }}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.input,
                !country && { color: COLORS.textSecondary },
              ]}
            >
              {country || 'Select'}
            </Text>
            <Ionicons name="chevron-down" size={20} color={COLORS.black} />
          </TouchableOpacity>
          {showCountry && (
            <View style={styles.dropdownList}>
              {COUNTRY_OPTIONS.map(opt => (
                <TouchableOpacity
                  key={opt}
                  style={styles.dropdownItem}
                  onPress={() => {
                    setCountry(opt);
                    setShowCountry(false);
                  }}
                >
                  <Text style={styles.dropdownItemText}>{opt}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text style={styles.fieldLabel}>City</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={city}
              onChangeText={setCity}
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>

          <Text style={styles.fieldLabel}>Enter Address</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={address}
              onChangeText={setAddress}
              placeholderTextColor={COLORS.textSecondary}
            />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.85}
          style={{ marginHorizontal: 16, marginTop: 24, marginBottom: 16 }}
        >
          <LinearGradient
            colors={[COLORS.goldGradientStart, COLORS.goldGradientEnd]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.primaryBtn}
          >
            <Text style={styles.primaryBtnText}>Save Changes</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default EditProfileScreen;
