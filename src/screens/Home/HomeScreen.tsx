import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { Svg, Path, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Header/Header';
import { styles } from './Style/style';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  const dummyCards = [
    { id: '1', balance: '30,000.00', reward: '430.00', image: IMAGES.cardBrown },
    { id: '2', balance: '45,000.00', reward: '600.00', image: IMAGES.CARDBLACK },
  ];

  const renderCard = ({ item }: any) => (
    <View style={styles.cardItem}>
      <Image source={item.image} style={StyleSheet.absoluteFill} resizeMode="cover" />
      <View style={styles.cardItemContent}>
        <View>
          <Text style={styles.cardLabel}>Card Balance</Text>
          <Text style={styles.cardValue}>${item.balance}</Text>
        </View>
        <View>
          <Text style={styles.cardLabel}>Card Reward</Text>
          <Text style={styles.cardValue}>${item.reward}</Text>
        </View>
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
                  d="M 0 200 L 0 160 C 40 120 70 80 100 85 C 130 90 150 130 180 130 C 210 130 230 80 260 80 C 290 80 320 80 340 50 C 370 20 385 10 400 0 L 400 200 Z"
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
                colors={['#BE9748', '#07080A']}
                style={styles.summaryButtonInner}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              >
                <Text style={[styles.buttonTitle, { color: COLORS.white }]}>Current Value</Text>
                <View style={styles.buttonValueRow}>
                  <Text style={[styles.buttonValue, { color: COLORS.white }]}>$300</Text>
                  <Icon name="eye-outline" size={16} color={COLORS.white} />
                </View>
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.summaryButton, { backgroundColor: COLORS.white }]} activeOpacity={0.8}>
              <View style={styles.summaryButtonInner}>
                <Text style={[styles.buttonTitle, { color: COLORS.black }]}>By Age 50</Text>
                <View style={styles.buttonValueRow}>
                  <Text style={[styles.buttonValue, { color: COLORS.black }]}>$300</Text>
                  <Icon name="eye-outline" size={16} color={COLORS.black} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
