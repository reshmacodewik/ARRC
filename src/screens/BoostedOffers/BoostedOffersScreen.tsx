import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Image,
  StatusBar,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';
import HeaderBack from '../../components/Header/HeaderBack';
import { IMAGES } from '../../constants/images';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constants/colors';

const BackIcon = () => (
  <Text style={{ color: '#C49C51', fontSize: 18, fontWeight: '700' }}>‹</Text>
);
const FilterIcon = () => (
  <Text style={{ color: '#C49C51', fontSize: 18 }}>⛉</Text>
);
const BellIcon = () => <Text style={{ color: '#fff', fontSize: 20 }}>🔔</Text>;

const OFFERS = [
  {
    id: '1',
    logo: IMAGES.StarBucksLogo, // replace with your asset paths
    title: 'Earned +2% Extra at \nStarbucks',
    btnLabel: 'Get Rewards',
    theme: {
      bg: '#E8F5E9',
      blob1: '#A5D6A7',
      blob2: '#C8E6C9',
      btnBg: '#2E7D32',
      btnText: '#fff',
    },
  },
  {
    id: '2',
    logo: IMAGES.NikeLogo,
    title: 'Get 5% Reward at Nike',
    btnLabel: 'Get Rewards',
    theme: {
      bg: '#FFF3E5',
      blob1: '#FFCBB4',
      blob2: '#FFCBB4',
      btnBg: '#FF8605',
      btnText: '#fff',
    },
  },
  {
    id: '3',
    logo: IMAGES.AmazonLogo,
    title: 'Earned $10 at Amazon \nShopping',
    btnLabel: 'Get Rewards',
    theme: {
      bg: '#FFFDE7',
      blob1: '#BE9748',
      blob2: '#BE9748',
      btnBg: '#BE9748',
      btnText: '#fff',
    },
  },
  {
    id: '4',
    logo: IMAGES.DominozLogo,
    title: 'Get 5% Cashback at \nDominoz Pizza',
    btnLabel: 'Get Rewards',
    theme: {
      bg: '#E5EFFF',
      blob1: '#0F4C69',
      blob2: '#0F4C69',
      btnBg: '#0F4C69',
      btnText: '#fff',
    },
  },
];

interface OfferCardProps {
  logo: any;
  title: string;
  btnLabel: string;
  theme: {
    bg: string;
    blob1: string;
    blob2: string;
    btnBg: string;
    btnText: string;
  };
}

const OfferCard: React.FC<OfferCardProps> = ({
  logo,
  title,
  btnLabel,
  theme,

}) => (
  <View style={[styles.card, { backgroundColor: theme.bg }]}>
    <View style={[styles.blobTopRight, { backgroundColor: theme.blob1 }]} />
    <View style={[styles.blobBottomLeft, { backgroundColor: theme.blob2 }]} />

    <View style={styles.cardRow}>
      <View style={styles.logoWrapper}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>

    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.rewardBtn, { backgroundColor: theme.btnBg }]}
    >
      <Text style={[styles.rewardBtnText, { color: theme.btnText }]}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  </View>
);

const BoostedOffersScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <HeaderBack
          showBack
          title="Boosted Offers"
          onBackPress={() => navigation.goBack()}
        />
        {OFFERS.map(offer => (
          <OfferCard
            key={offer.id}
            logo={offer.logo}
            title={offer.title}
            btnLabel={offer.btnLabel}
            theme={offer.theme}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default BoostedOffersScreen;
