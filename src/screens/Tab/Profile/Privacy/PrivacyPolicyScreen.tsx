import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  ImageBackground,
} from 'react-native';

import styles from '../Terms/SharedStyles';
import { IMAGES } from '../../../../constants/images';
import Header from '../../../../components/Header/Header';
import HeaderBack from '../../../../components/Header/HeaderBack';

const LOREM =
  'Lorem ipsum dolor sit amet consectetur. Leo gravida cursus faucibus et nascetur in gravida. Eros sollicitudin et turpis placerat. Fringilla elementum egestas viverra rhoncus arcu vitae quam neque quis. Ut sit commodo non in arcu. Id.';

const SHORT_LOREM =
  'Lorem ipsum dolor sit amet consectetur. Leo gravida cursus faucibus et nascetur in gravida.';

const POLICY_ITEMS = [LOREM, LOREM, SHORT_LOREM, SHORT_LOREM, LOREM, LOREM];

const PrivacyPolicyScreen: React.FC = ({ navigation }: any) => {
  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.safeArea}
      resizeMode="cover"
    >
      <Header />
      <HeaderBack
        showBack
        title="Privacy Policy"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        contentContainerStyle={styles.policyScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {POLICY_ITEMS.map((item, index) => (
          <View key={index} style={styles.bulletRow}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.policyText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default PrivacyPolicyScreen;
