import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Svg,
  Path,
  Defs,
  LinearGradient as SvgLinearGradient,
  Stop,
} from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import Header from '../../components/Header/Header';
import { styles } from './Style/style';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';
import FlipCard from '../../components/FlipCard/Flipcard';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState<{ [key: string]: boolean }>(
    {},
  );
  const toggleFlip = (cardId: string) => {
    setFlippedCards(prev => ({ ...prev, [cardId]: !prev[cardId] }));
  };
  const navigation = useNavigation();
  const dummyCards = [
    {
      id: '1',
      holderName: 'Alex Amiri',
      image: IMAGES.cardBrown,
      cardNumber: '2134 **** **** 2341',
      expiry: '01/26',
      cvv: '123',
    },
    {
      id: '2',
      holderName: 'Alex Amiri',
      image: IMAGES.CARDBLACK,
      cardNumber: '5678 **** **** 9012',
      expiry: '03/27',
      cvv: '456',
    },
  ];

  const recentTransactions = [
    {
      id: '1',
      title: 'Starbucks',
      subText: 'Coffee Purchase . March 18',
      amount: '$320',
      reward: '$15',
      iconLetter: 'S',
      isDarkBg: false,
    },
    {
      id: '2',
      title: 'Amazon',
      subText: 'Shopping . March 10',
      amount: '$320',
      reward: '$15',
      iconLetter: 'A',
      isDarkBg: true,
    },
    {
      id: '3',
      title: 'Dominoz Pizza',
      subText: 'Pizza . March 5',
      amount: '$320',
      reward: '$15',
      iconLetter: 'D',
      isDarkBg: true,
    },
    {
      id: '4',
      title: 'Flipkart',
      subText: 'Shopping . March 4',
      amount: '$320',
      reward: '$15',
      iconLetter: 'F',
      isDarkBg: true,
    },
    {
      id: '5',
      title: 'PVR Cinema',
      subText: 'Movie . March 2',
      amount: '$320',
      reward: '$15',
      iconLetter: 'P',
      isDarkBg: true,
    },
  ];

  const transitionData = [
    { label: 'Groceries', height: 90 },
    { label: 'Dining', height: 75 },
    { label: 'Shopping', height: 50 },
    { label: 'Travel', height: 40 },
    { label: 'Others', height: 25 },
  ];

  const renderCard = ({ item }: any) => (
    <FlipCard
      item={item}
      isFlipped={flippedCards[item.id] || false}
      onToggle={() => toggleFlip(item.id)}
    />
  );

  const renderTransaction = (item: any) => (
    <View key={item.id} style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View
          style={[
            styles.transactionAvatarCircle,
            { backgroundColor: item.isDarkBg ? '#302922' : '#8A7A66' },
          ]}
        >
          <Text style={styles.transactionAvatarText}>{item.iconLetter}</Text>
        </View>
        <View>
          <Text style={styles.transactionTitleText}>{item.title}</Text>
          <Text style={styles.transactionSubText}>{item.subText}</Text>
        </View>
      </View>
      <View style={styles.transactionRight}>
        <View style={styles.transactionAmountRow}>
          <Text style={styles.transactionAmount}>{item.amount}</Text>
        </View>
        <Text style={styles.transactionRewardText}>
          Reward{' '}
          <Text style={{ color: COLORS.white, fontSize: 11 }}>
            {item.reward}
          </Text>
        </Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <View style={styles.greetingContainer}>
          <Text style={styles.greetingText}>Good Morning</Text>
          <Text style={styles.userName}>Alex Amiri</Text>
        </View>

        <View style={styles.balanceContainer}>
          <Text style={styles.balanceTitle}>ARRC Portfolio Balance</Text>

          <View style={styles.chartContainer}>
            <View style={styles.axisLinesContainer}>
              {['$1000', '$500', '$200', '$100'].map((label, index) => (
                <View key={index} style={styles.axisLine}>
                  <Text style={styles.axisLabel}>{label}</Text>
                  <View style={styles.dashedLine} />
                </View>
              ))}
            </View>

            <View style={StyleSheet.absoluteFill}>
              <Svg
                height="100%"
                width="100%"
                viewBox="0 0 400 200"
                preserveAspectRatio="none"
              >
                <Defs>
                  <SvgLinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop
                      offset="0"
                      stopColor={COLORS.goldGradientStart}
                      stopOpacity="1"
                    />
                    <Stop
                      offset="1"
                      stopColor={COLORS.goldGradientEnd}
                      stopOpacity="0.1"
                    />
                  </SvgLinearGradient>
                </Defs>
                <Path
                  d="M 0 200 L 0 160 C 40 120 70 120 100 135 C 130 150 150 130 180 130 C 210 130 230 110 260 110 C 290 110 320 80 340 50 C 370 20 385 10 400 0 L 400 200 Z"
                  fill="url(#grad)"
                />
              </Svg>
            </View>

            <View style={styles.chartPointer}>
              <View style={styles.pointerDot} />
              <View style={styles.pointerLine} />
            </View>
            <View style={styles.tooltipContainer}>
              <Text style={styles.tooltipDate}>29 July 00:00</Text>
              <View style={styles.tooltipValueRow}>
                <Text style={styles.tooltipValue}>220,342.76</Text>
                <Text style={styles.tooltipPercentage}>+3.4%</Text>
              </View>
            </View>
          </View>

          <View style={styles.summaryButtonsContainer}>
            <TouchableOpacity style={styles.summaryButton} activeOpacity={0.8}>
              <LinearGradient
                colors={['#A88647', '#000000']}
                style={styles.summaryButtonInners}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <Text style={[styles.buttonTitle, { color: COLORS.white }]}>
                  Current Value
                </Text>
                <View style={styles.buttonValueRow}>
                  <Text style={[styles.buttonValue, { color: COLORS.white }]}>
                    $300
                  </Text>
                  <Icon name="eye-outline" size={14} color={COLORS.white} />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.summaryButton, { backgroundColor: COLORS.white }]}
              activeOpacity={0.8}
            >
              <View style={styles.summaryButtonInner}>
                <Text style={[styles.buttonTitle, { color: COLORS.black }]}>
                  By Age 50
                </Text>
                <View style={styles.buttonValueRow}>
                  <Text style={[styles.buttonValue, { color: COLORS.black }]}>
                    $300
                  </Text>
                  <Icon name="eye-outline" size={14} color={COLORS.black} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderTopWidth: 1.5,

            borderColor: COLORS.white,
            backgroundColor: COLORS.black,
            marginHorizontal: -20,
            padding: 20,
          }}
        >
          <View style={styles.cardsSection}>
            <Text style={styles.sectionTitle}>
              Your Virtual Arrc Debit Cards
            </Text>
            <FlatList
              data={dummyCards}
              renderItem={renderCard}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardsScroll}
              onScroll={event => {
                const slideSize = event.nativeEvent.layoutMeasurement.width;
                const index = event.nativeEvent.contentOffset.x / slideSize;
                const roundIndex = Math.round(index);
                setActiveIndex(roundIndex);
              }}
              scrollEventThrottle={16}
              pagingEnabled
            />
            <View style={styles.paginationDotsContainer}>
              {dummyCards.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.paginationDot,
                    activeIndex === index
                      ? styles.paginationDotActive
                      : styles.paginationDotInactive,
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={styles.rewardSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>
                Reward Earned
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RewardEarned' as never)}
              >
                <View
                  style={{
                    backgroundColor: COLORS.goldGradientStart,
                    borderRadius: 50,
                    padding: 5,
                  }}
                >
                  <Icon name="chevron-forward" size={20} color={COLORS.white} />
                </View>
              </TouchableOpacity>
            </View>

            <LinearGradient
              colors={['#BE9748', '#000000']}
              style={styles.rewardBoxGradientBorder}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <View style={styles.rewardBox}>
                <LinearGradient
                  colors={['#F9EDB4', '#C49C51']}
                  style={styles.nextGoalTag}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.nextGoalText}>
                    Next Goal <Text style={{ fontWeight: '400' }}>$500</Text>
                  </Text>
                </LinearGradient>

                <View style={styles.rewardBoxInner}>
                  <View style={styles.rewardLeftCol}>
                    <TouchableOpacity
                      style={styles.rewardButton}
                      activeOpacity={0.8}
                    >
                      <LinearGradient
                        colors={['#A88647', '#000000']}
                        style={styles.rewardButtonInners}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        <Text
                          style={[styles.buttonTitle, { color: COLORS.white }]}
                        >
                          This Month
                        </Text>
                        <View style={styles.buttonValueRow}>
                          <Text
                            style={[
                              styles.buttonValue,
                              { color: COLORS.white },
                            ]}
                          >
                            $300
                          </Text>
                          <Icon
                            name="eye-outline"
                            size={14}
                            color={COLORS.white}
                          />
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.rewardButton,
                        { backgroundColor: COLORS.white },
                      ]}
                      activeOpacity={0.8}
                    >
                      <View style={styles.rewardButtonInner}>
                        <Text
                          style={[styles.buttonTitle, { color: COLORS.black }]}
                        >
                          Year To Date
                        </Text>
                        <View style={styles.buttonValueRow}>
                          <Text
                            style={[
                              styles.buttonValue,
                              { color: COLORS.black },
                            ]}
                          >
                            $300
                          </Text>
                          <Icon
                            name="eye-outline"
                            size={14}
                            color={COLORS.black}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.rewardRightCol}>
                    <View style={styles.progressCircleContainer}>
                      <View style={styles.progressCircleStroke} />
                      <Text style={styles.progressTitle}>Next Goal</Text>
                      <Text style={styles.progressValue}>22%</Text>
                    </View>
                    <Text style={styles.completedText}>Completed</Text>
                  </View>
                </View>

                <View style={styles.rewardSuccessMessageRow}>
                  <View style={styles.successIcon}>
                 <Image source={IMAGES.CheckIcon} style={{width:20,height:20}}/>
                  </View>
                  <Text style={styles.rewardSuccessMessage}>
                    Yayy !! You Earned $30 This Month
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.transactionsSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>
                Recent Transactions
              </Text>
              <View
                style={{
                  backgroundColor: COLORS.goldGradientStart,
                  borderRadius: 50,
                  padding: 5,
                }}
              >
                <Icon name="chevron-forward" size={20} color={COLORS.white} />
              </View>
            </View>

            <View>{recentTransactions.map(renderTransaction)}</View>
          </View>

          <View style={styles.transitionSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>
                Transition & Reward
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('TransitionReward' as never)}
              >
                <View
                  style={{
                    backgroundColor: COLORS.goldGradientStart,
                    borderRadius: 50,
                    padding: 5,
                  }}
                >
                  <Icon name="chevron-forward" size={20} color="#111" />
                </View>
              </TouchableOpacity>
            </View>
            <LinearGradient
              colors={['#000000', '#C49C51', '#C49C51', '#000000']}
              locations={[0, 0.3, 0.7, 1]}
              start={{ x: 0.5, y: 0 }} // top center → black
              end={{ x: 0.5, y: 1 }} // bottom center → gold
              style={{
                borderRadius: 20,
                padding: 1,
              }}
            >
              <View
                style={[
                  styles.transitionBox,
                  {
                    borderRadius: 19, // slightly less than outer to fit inside
                    backgroundColor: '#000000', // or your card background color
                    overflow: 'hidden',
                  },
                ]}
              >
                <View style={styles.barChartContainer}>
                  {transitionData.map((item, index) => (
                    <View key={index} style={styles.barCol}>
                      <LinearGradient
                        colors={['#C49C51', '#F9EDB4']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={[styles.bar, { height: item.height }]}
                      />
                      <Text style={styles.barLabel}>{item.label}</Text>
                    </View>
                  ))}
                </View>

                <View style={styles.summaryButtonsContainer}>
                  <TouchableOpacity
                    style={styles.summaryButton}
                    activeOpacity={0.8}
                  >
                    <LinearGradient
                      colors={['#A88647', '#130e09']}
                      style={styles.summaryButtonInners}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 0, y: 1 }}
                    >
                      <Text style={[styles.buttonTitle, { color: '#fff' }]}>
                        This Month Spend
                      </Text>
                      <View style={styles.buttonValueRow}>
                        <Text style={[styles.buttonValue, { color: '#fff' }]}>
                          $300
                        </Text>
                        <Icon name="eye-outline" size={14} color="#fff" />
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.summaryButton, { backgroundColor: '#fff' }]}
                    activeOpacity={0.8}
                  >
                    <View style={styles.summaryButtonInners}>
                      <Text style={[styles.buttonTitle, { color: '#000' }]}>
                        Reward Earned
                      </Text>
                      <View style={styles.buttonValueRow}>
                        <Text style={[styles.buttonValue, { color: '#000' }]}>
                          $300
                        </Text>
                        <Icon name="eye-outline" size={14} color="#000" />
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </LinearGradient>
          </View>

          {/* Boosted Offers Section */}
          <View style={styles.offersSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>
                Boosted Offers
              </Text>
              <TouchableOpacity onPress={()=> navigation.navigate('BoostedOffers' as never)}>
              <View
                style={{
                  backgroundColor: COLORS.goldGradientStart,
                  borderRadius: 50,
                  padding: 5,
                }}
              >
                <Icon name="chevron-forward" size={20} color={COLORS.white} />
              </View>
              </TouchableOpacity>
            </View>

            <View style={styles.offerCardRow}>
              <View style={styles.offerCard}>
                <View style={styles.offerCardCircleBg1} />
                <View style={styles.offerCardCircleBg2} />

                <View style={styles.offerLogoCircle}>
                  <Image
                    source={{
                      uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png',
                    }}
                    style={styles.offerLogoImage}
                  />
                </View>

                <View style={styles.offerTextContent}>
                  <Text style={styles.offerTitle}>
                    Earned +2% Extra at {'\n'}Starbucks
                  </Text>
                  <TouchableOpacity style={styles.offerBtn}>
                    <Text style={styles.offerBtnText}>Get Rewards</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default HomeScreen;
