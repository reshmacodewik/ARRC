import React from 'react';
import { TouchableOpacity, Text, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from '../Button/style';
import { COLORS } from '../../constants/colors';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};

const Button = ({ title, onPress, disabled = false, style }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={disabled}
      style={styles.touchable}
    >
      <LinearGradient
        colors={[
          COLORS.goldGradientStart,
          COLORS.primary,
          COLORS.goldGradientEnd,
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.button, disabled && styles.disabled, style]}
      >
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;