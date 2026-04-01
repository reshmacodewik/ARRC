import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../utils/responsive';
import { FONTS } from '../../../constants/fonts';
import { COLORS } from '../../../constants/colors';

export default StyleSheet.create({
  background: { flex: 1 },
  container: {
    flex: 1,
  },

  glow: {
    width: wp(100),
    height: hp(50),
    borderRadius: 30,
  },
  cardWrapper: {
    width: wp(100),
    height: hp(45),
    alignSelf: 'center',
    marginTop: hp(-5),
    justifyContent: 'center',
    alignItems: 'center',
  },

  backCard: {
    position: 'absolute',
    width: wp(85),
    height: hp(50),
    resizeMode: 'contain',
    transform: [{ rotate: '5deg' }],
    right: wp(0),
    top: hp(2),
  },

  frontCard: {
    position: 'absolute',
    width: wp(85),
    height: hp(50),
    resizeMode: 'contain',
    transform: [{ rotate: '3deg' }],
    left: wp(-5),
    top: hp(13),
  },
  cards: {
    width: wp(115),
    height: hp(58),
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: hp(8),
  },
  title: {
    fontSize: 36,
    color: COLORS.white,
    textAlign: 'center',
    fontFamily: FONTS.bold,
    marginTop: hp(20),
  },
  subtitle: {
    fontSize: 19,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: hp(1),
    paddingHorizontal: wp(10),
    fontFamily: FONTS.regular,
  },
  buttonContainer: {
    marginTop: hp(1),
  },
});
