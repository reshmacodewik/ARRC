import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Svg, Path, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import Header from '../../components/Header/Header';
import { styles } from './Style/style';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';


const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const dummyCards = [
    { id: '1', holderName: 'Alex Amiri', image: IMAGES.cardBrown },
    { id: '2', holderName: 'Alex Amiri', image: IMAGES.CARDBLACK },
  ];

  const recentTransactions = [
    { id: '1', title: 'Starbucks', subText: 'Coffee Purchase . March 18', amount: '$320', reward: '$15', iconLetter: 'S', isDarkBg: false },
    { id: '2', title: 'Amazon', subText: 'Shopping . March 10', amount: '$320', reward: '$15', iconLetter: 'A', isDarkBg: true },
    { id: '3', title: 'Dominoz Pizza', subText: 'Pizza . March 5', amount: '$320', reward: '$15', iconLetter: 'D', isDarkBg: true },
    { id: '4', title: 'Flipkart', subText: 'Shopping . March 4', amount: '$320', reward: '$15', iconLetter: 'F', isDarkBg: true },
    { id: '5', title: 'PVR Cinema', subText: 'Movie . March 2', amount: '$320', reward: '$15', iconLetter: 'P', isDarkBg: true },
  ];

  const transitionData = [
    { label: 'Groceries', height: 90 },
    { label: 'Dining', height: 75 },
    { label: 'Shopping', height: 50 },
    { label: 'Travel', height: 40 },
    { label: 'Others', height: 25 },
  ];


  const renderCard = ({ item }: any) => (
    <View style={styles.cardItem}>
      <Image source={item.image} style={[StyleSheet.absoluteFill, { opacity: 0.2 }]} resizeMode="cover" />

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.holderName}</Text>
        <View style={styles.cardActionsIcons}>
          <Icon name="sync-outline" size={16} color="rgba(255,255,255,0.8)" />
          <Icon name="chevron-forward" size={16} color="rgba(255,255,255,0.8)" />
        </View>
      </View>

      <Image source={IMAGES.chipIcon} style={styles.chipIconWrapper} />

      <View style={styles.cardBottomRow}>
        <View style={styles.cardActionBtnsRow}>
          <TouchableOpacity style={styles.cardActionBtn}>
            <View style={styles.cardActionIconCircle}>
              <Icon name="add" size={16} color="rgba(255,255,255,0.8)" />
            </View>
            <Text style={styles.cardActionBtnText}>Fund Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardActionBtn}>
            <View style={styles.cardActionIconCircle}>
              <Icon name="paper-plane-outline" size={14} color="rgba(255,255,255,0.8)" />
            </View>
            <Text style={styles.cardActionBtnText}>Transfer Money</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardActionBtn}>
            <View style={styles.cardActionIconCircle}>
              <Icon name="lock-closed-outline" size={14} color="rgba(255,255,255,0.8)" />
            </View>
            <Text style={styles.cardActionBtnText}>Lock Card</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cardActionBtn}>
            <View style={styles.cardActionIconCircle}>
              <Icon name="refresh-outline" size={14} color="rgba(255,255,255,0.8)" />
            </View>
            <Text style={styles.cardActionBtnText}>Replace Card</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.arrcLogoText}>ARRC</Text>
      </View>
    </View>
  );

  const renderTransaction = (item: any) => (
    <View key={item.id} style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <View style={[styles.transactionAvatarCircle, { backgroundColor: item.isDarkBg ? '#302922' : '#8A7A66' }]}>
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
        <Text style={styles.transactionRewardText}>Reward <Text style={{ color: COLORS.white, fontSize: 11 }}>{item.reward}</Text></Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={IMAGES.splashBg}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>

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
              <Svg height="100%" width="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
                <Defs>
                  <SvgLinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <Stop offset="0" stopColor={COLORS.goldGradientStart} stopOpacity="1" />
                    <Stop offset="1" stopColor={COLORS.goldGradientEnd} stopOpacity="0.1" />
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
                style={styles.summaryButtonInner}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <Text style={[styles.buttonTitle, { color: COLORS.white }]}>Current Value</Text>
                <View style={styles.buttonValueRow}>
                  <Text style={[styles.buttonValue, { color: COLORS.white }]}>$300</Text>
                  <Icon name="eye-outline" size={14} color={COLORS.white} />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.summaryButton, { backgroundColor: COLORS.white }]} activeOpacity={0.8}>
              <View style={styles.summaryButtonInner}>
                <Text style={[styles.buttonTitle, { color: COLORS.black }]}>By Age 50</Text>
                <View style={styles.buttonValueRow}>
                  <Text style={[styles.buttonValue, { color: COLORS.black }]}>$300</Text>
                  <Icon name="eye-outline" size={14} color={COLORS.black} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20, borderTopWidth: 1, borderColor: COLORS.white, backgroundColor: COLORS.black, marginHorizontal: -20, padding: 20 }}>
          <View style={styles.cardsSection}>
            <Text style={styles.sectionTitle}>Your Virtual Arrc Debit Cards</Text>
            <FlatList
              data={dummyCards}
              renderItem={renderCard}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.cardsScroll}
            />
            <View style={styles.paginationDotsContainer}>
              <View style={[styles.paginationDot]} />
              <View style={[styles.paginationDot, styles.paginationDotInactive]} />
              <View style={[styles.paginationDot, styles.paginationDotInactive]} />
            </View>
          </View>
          <View style={styles.rewardSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Reward Earned</Text>
              <Icon name="chevron-forward-circle" size={24} color="#C49C51" />
            </View>

            <LinearGradient
              colors={['#000000', '#BE9748',]}
              start={{ x: 0, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.rewardBoxGradientBorder}
            >
              <View style={styles.rewardBox}>


                <LinearGradient
                  colors={['#F9EDB4', '#C49C51']}
                  style={styles.nextGoalTag}
                  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                >
                  <Text style={styles.nextGoalText}>Next Goal <Text style={{ fontWeight: '400' }}>$500</Text></Text>
                </LinearGradient>

                <View style={styles.rewardBoxInner}>
                  <View style={styles.rewardLeftCol}>
                    <TouchableOpacity style={styles.rewardButton} activeOpacity={0.8}>
                      <LinearGradient
                        colors={['#A88647', '#342617']}
                        style={styles.rewardButtonInner}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        <Text style={[styles.buttonTitle, { color: COLORS.white }]}>This Month</Text>
                        <View style={styles.buttonValueRow}>
                          <Text style={[styles.buttonValue, { color: COLORS.white }]}>$300</Text>
                          <Icon name="eye-outline" size={14} color={COLORS.white} />
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.rewardButton, { backgroundColor: COLORS.white }]} activeOpacity={0.8}>
                      <View style={styles.rewardButtonInner}>
                        <Text style={[styles.buttonTitle, { color: COLORS.black }]}>Year To Date</Text>
                        <View style={styles.buttonValueRow}>
                          <Text style={[styles.buttonValue, { color: COLORS.black }]}>$300</Text>
                          <Icon name="eye-outline" size={14} color={COLORS.black} />
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
                    <Icon name="checkmark" size={14} color={COLORS.white} />
                  </View>
                  <Text style={styles.rewardSuccessMessage}>Yayy !! You Earned $30 This Month</Text>
                </View>
              </View>
            </LinearGradient>
          </View>
          <View style={styles.transactionsSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Recent Transactions</Text>
              <View style={{ backgroundColor: COLORS.goldGradientStart, borderRadius: 50, padding: 5 }}>
                <Icon name="chevron-forward" size={20} color={COLORS.white} />
              </View>
            </View>

            <View>
              {recentTransactions.map(renderTransaction)}
            </View>
          </View>

          {/* Transition & Reward Section */}
          <View style={styles.transitionSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Transition & Reward</Text>
              <View style={{ backgroundColor: COLORS.goldGradientStart, borderRadius: 50, padding: 5 }}>
                <Icon name="chevron-forward" size={20} color={COLORS.white} />
              </View>

            </View>

            <View style={styles.transitionBox}>
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
                <TouchableOpacity style={styles.summaryButton} activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#A88647', '#130e09ff']}
                    style={styles.summaryButtonInners}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <Text style={[styles.buttonTitle, { color: COLORS.white }]}>This Month Spend</Text>
                    <View style={styles.buttonValueRow}>
                      <Text style={[styles.buttonValue, { color: COLORS.white }]}>$300</Text>
                      <Icon name="eye-outline" size={14} color={COLORS.white} />
                    </View>
                  </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.summaryButton, { backgroundColor: COLORS.white }]} activeOpacity={0.8}>
                  <View style={styles.summaryButtonInner}>
                    <Text style={[styles.buttonTitle, { color: COLORS.black }]}>Reward Earned</Text>
                    <View style={styles.buttonValueRow}>
                      <Text style={[styles.buttonValue, { color: COLORS.black }]}>$300</Text>
                      <Icon name="eye-outline" size={14} color={COLORS.black} />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Boosted Offers Section */}
          <View style={styles.offersSection}>
            <View style={styles.sectionHeaderCentered}>
              <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>Boosted Offers</Text>
              <View style={{ backgroundColor: COLORS.goldGradientStart, borderRadius: 50, padding: 5 }}>
                <Icon name="chevron-forward" size={20} color={COLORS.white} />
              </View>
            </View>

            <View style={styles.offerCardRow}>
              <View style={styles.offerCard}>
                <View style={styles.offerCardCircleBg1} />
                <View style={styles.offerCardCircleBg2} />

                <View style={styles.offerLogoCircle}>

                  <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png' }} style={styles.offerLogoImage} />
                </View>

                <View style={styles.offerTextContent}>
                  <Text style={styles.offerTitle}>Earned +2% Extra  at {'\n'}Starbucks</Text>
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
