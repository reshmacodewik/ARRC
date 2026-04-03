import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';
import styles from './SharedStyles';
import { COLORS } from '../../../../constants/colors';
import { IMAGES } from '../../../../constants/images';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../../../components/Header/Header';
import HeaderBack from '../../../../components/Header/HeaderBack';

const LOREM =
  'Lorem ipsum dolor sit amet consectetur. Leo gravida cursus faucibus et nascetur in gravida. Eros sollicitudin et turpis placerat. Fringilla elementum egestas viverra rhoncus arcu vitae quam neque quis. Ut sit commodo non in arcu. Id.';

const SHORT_LOREM =
  'Lorem ipsum dolor sit amet consectetur. Leo gravida cursus faucibus et nascetur in gravida.';

const TC_ITEMS = [LOREM, LOREM, SHORT_LOREM, SHORT_LOREM, LOREM, LOREM];

const TermsConditionScreen: React.FC = ({ navigation }: any) => {
  const [accepted, setAccepted] = useState(true);

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    > 
      <ScrollView
        contentContainerStyle={styles.policyScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <HeaderBack
          showBack
          title="Terms & Conditions"
          onBackPress={() => navigation.goBack()}
        />
        {TC_ITEMS.map((item, index) => (
          <View key={index} style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.policyText}>{item}</Text>
          </View>
        ))}
        <View style={styles.tcFooter}>
          <TouchableOpacity
            style={styles.checkboxRow}
            onPress={() => setAccepted(!accepted)}
            activeOpacity={0.8}
          >
            <View style={[styles.checkbox, accepted && styles.checkboxActive]}>
              {accepted && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={styles.checkboxLabel}>
              I Accept To Terms & Conditions
            </Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.85}>
            <LinearGradient
              colors={[COLORS.goldGradientStart, COLORS.goldGradientEnd]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.primaryBtn}
            >
              <Text style={styles.primaryBtnText}>I Agree</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </ImageBackground>
  );
};

export default TermsConditionScreen;
