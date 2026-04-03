import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';
import { rewardStyles } from './styles';
import HeaderBack from '../../components/Header/HeaderBack';

interface Transaction {
  id: string;
  title: string;
  subText: string;
  amount: string;
  iconLetter: string;
  avatarColor: string;
}

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Starbucks',
    subText: 'Coffee Purchase . March 16',
    amount: '$32',
    iconLetter: 'S',
    avatarColor: '#8A7A66',
  },
  {
    id: '2',
    title: 'Amazon',
    subText: 'Shopping . March 10',
    amount: '$51',
    iconLetter: 'A',
    avatarColor: '#302922',
  },
  {
    id: '3',
    title: 'Dominoz Pizza',
    subText: 'Pizza . March 6',
    amount: '$49',
    iconLetter: 'D',
    avatarColor: '#302922',
  },
  {
    id: '4',
    title: 'Flipkart',
    subText: 'Shopping . March 4',
    amount: '$09',
    iconLetter: 'F',
    avatarColor: '#302922',
  },
  {
    id: '5',
    title: 'PVR Cinema',
    subText: 'Movie . March 2',
    amount: '$32',
    iconLetter: 'P',
    avatarColor: '#302922',
  },
];

const RewardEarnedScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={rewardStyles.container}
      resizeMode="cover"
    >
      <ScrollView
        style={rewardStyles.container}
        contentContainerStyle={rewardStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {' '}
        <Header />
        <HeaderBack
          showBack
          title="Reward Earned"
          onBackPress={() => navigation.goBack()}
        />
        <View style={rewardStyles.statsGrid}>
          <View style={rewardStyles.statCard}>
            <View style={rewardStyles.statIconCircle}>
              <Icon name="cash-outline" size={22} color={COLORS.white} />
            </View>
            <Text style={rewardStyles.statLabel}>Total Reward Earned</Text>
            <Text style={rewardStyles.statValue}>$459.89</Text>
          </View>

          {/* Add This Month Goal */}
          <TouchableOpacity activeOpacity={0.8} style={rewardStyles.statCard}>
            <View style={rewardStyles.statIconCircle}>
              <Icon name="add" size={24} color={COLORS.white} />
            </View>
            <Text style={rewardStyles.statLabel}>Add This Month Goal</Text>
            <Text style={rewardStyles.statValue}>$--</Text>
          </TouchableOpacity>
        </View>
        <View style={rewardStyles.toggleRow}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={rewardStyles.toggleBtnGold}
          >
            <LinearGradient
              colors={['#C49C51', '#000000']}
              style={rewardStyles.toggleBtnGoldInner}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <Text style={[rewardStyles.toggleLabel, { color: COLORS.white }]}>
                This Month
              </Text>
              <Text style={[rewardStyles.toggleValue, { color: COLORS.white }]}>
                $300
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          {/* Year To Date — white */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={rewardStyles.toggleBtnWhite}
          >
            <Text style={[rewardStyles.toggleLabel, { color: COLORS.black }]}>
              Year To Date
            </Text>
            <Text style={[rewardStyles.toggleValue, { color: COLORS.black }]}>
              $300
            </Text>
          </TouchableOpacity>
        </View>
        <View style={rewardStyles.sectionHeader}>
          <Text style={rewardStyles.sectionTitle}>Reward Earned History</Text>
          <TouchableOpacity style={rewardStyles.calendarBtn}>
            <Icon name="calendar-outline" size={18} color="#C49C51" />
          </TouchableOpacity>
        </View>
        <View style={rewardStyles.transactionList}>
          {transactions.map(item => (
            <View key={item.id} style={rewardStyles.transactionItem}>
              <View
                style={[
                  rewardStyles.transactionAvatar,
                  { backgroundColor: item.avatarColor },
                ]}
              >
                <Text style={rewardStyles.transactionAvatarText}>
                  {item.iconLetter}
                </Text>
              </View>

              <View style={rewardStyles.transactionInfo}>
                <Text style={rewardStyles.transactionTitle}>{item.title}</Text>
                <Text style={rewardStyles.transactionSub}>{item.subText}</Text>
              </View>
              <View style={rewardStyles.transactionAmountPill}>
                <Text style={rewardStyles.transactionAmountText}>
                  {item.amount}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RewardEarnedScreen;
