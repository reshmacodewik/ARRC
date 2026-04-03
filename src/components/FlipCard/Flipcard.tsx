import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { IMAGES } from '../../constants/images';
import { COLORS } from '../../constants/colors';
import { styles } from '../../screens/Home/Style/style';

interface CardItem {
  id: string;
  holderName: string;
  image: any;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

interface FlipCardProps {
  item: CardItem;
  isFlipped: boolean;
  onToggle: () => void;
}


const CARD_HEIGHT = 190; // must match styles.cardItem height


const FlipCard: React.FC<FlipCardProps> = ({ item, isFlipped, onToggle }) => {
  const flipAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(flipAnim, {
      toValue: isFlipped ? 1 : 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  }, [isFlipped]);

  // Front: 0deg → -90deg (sweeps away at midpoint)
  const frontRotateY = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '-90deg', '-90deg'],
  });

  const backRotateY = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['90deg', '90deg', '0deg'],
  });

  const scale = flipAnim.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.04, 1],
  });

  const frontTransform = [
    { perspective: 1200 },
    { rotateY: frontRotateY },
    { scale },
  ];

  const backTransform = [
    { perspective: 1200 },
    { rotateY: backRotateY },
    { scale },
  ];

  return (
    <View style={flipCardStyles.wrapper}>
      <Animated.View
        style={[
          styles.cardItem,
          flipCardStyles.face,
          flipCardStyles.faceAbsolute,
          { backfaceVisibility: 'hidden', transform: frontTransform },
        ]}
      >
        <Image
          source={item.image}
          style={[StyleSheet.absoluteFill, flipCardStyles.cardBgImage]}
          resizeMode="cover"
        />

        {/* Header */}
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}> {item.holderName} </Text>
          <View style={styles.cardActionsIcons}>
            <TouchableOpacity
              onPress={onToggle}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image
                source={IMAGES.RepeatIcon}
                style={{ width: 20, height: 20 }}
              />
            </TouchableOpacity>
            <Icon name="chevron-forward" size={16} color={COLORS.white} />
          </View>
        </View>

        {/* Chip */}
        <Image source={IMAGES.chipIcon} style={styles.chipIconWrapper} />

        {/* Action buttons */}
        <View style={styles.cardBottomRow}>
          <View style={styles.cardActionBtnsRow}>
            <TouchableOpacity style={styles.cardActionBtn}>
              <View style={styles.cardActionIconCircle}>
                <Icon name="add" size={16} color="rgba(255,255,255,0.8)" />
              </View>
              <Text style={styles.cardActionBtnText}> Fund Card </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardActionBtn}>
              <View style={styles.cardActionIconCircle}>
                <Icon
                  name="paper-plane-outline"
                  size={14}
                  color="rgba(255,255,255,0.8)"
                />
              </View>
              <Text style={styles.cardActionBtnText}> Transfer Money </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardActionBtn}>
              <View style={styles.cardActionIconCircle}>
                <Icon
                  name="lock-closed-outline"
                  size={14}
                  color="rgba(255,255,255,0.8)"
                />
              </View>
              <Text style={styles.cardActionBtnText}> Lock Card </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardActionBtn}>
              <View style={styles.cardActionIconCircle}>
                <Icon
                  name="refresh-outline"
                  size={14}
                  color="rgba(255,255,255,0.8)"
                />
              </View>
              <Text style={styles.cardActionBtnText}> Replace Card </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.arrcLogoText}> ARRC </Text>
        </View>
      </Animated.View>
      <Animated.View
        style={[
          styles.cardItem,
          flipCardStyles.face,
          { backfaceVisibility: 'hidden', transform: backTransform },
        ]}
      >
        <Image
          source={item.image}
          style={[StyleSheet.absoluteFill, flipCardStyles.cardBgImage]}
          resizeMode="cover"
        />

        <View style={styles.cardHeader}>
          <Text style={[styles.cardTitle, flipCardStyles.cardNumberText]}>
            {item.cardNumber}
          </Text>
          <TouchableOpacity
            onPress={onToggle}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Image
              source={IMAGES.RepeatIcon}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.stripe} />

        <View style={styles.detailsRow}>
          <View>
            <Text style={styles.label}> VALID </Text>
            <Text style={[styles.value, { color: COLORS.textSecondary }]}>
              {item.expiry}
            </Text>
          </View>
          <View style={flipCardStyles.cvvContainer}>
            <Text style={styles.label}> CVV </Text>
            <Text style={styles.value}> {item.cvv} </Text>
          </View>
          <View style={flipCardStyles.spacer} />
          <Text style={styles.arrcLogoText}> ARRC </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const flipCardStyles = StyleSheet.create({
  wrapper: {
    height: CARD_HEIGHT,
    position: 'relative',
    width: 365,
    marginRight: 20,
  },
  face: {
    height: CARD_HEIGHT,
    width: '100%',
  },
  faceAbsolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  cardBgImage: {
    opacity: 0.2,
    borderRadius: 16,
  },
  cardNumberText: {
    fontSize: 17,
    letterSpacing: 7.5,
    color: COLORS.white,
  },
  cvvContainer: {
    marginLeft: 20,
  },
  spacer: {
    flex: 1,
  },
});

export default FlipCard;
