import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../utils/responsive';
import { FONTS } from '../../../constants/fonts';
import { COLORS } from '../../../constants/colors';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },


  topSection: {
    alignItems: 'center',
    marginTop: hp(4),
  },
  logo: {
    width: wp(35),
    height: wp(25),
    marginBottom: hp(2),
  },
  heading: {
    fontSize: 18,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 25,
    marginBottom: hp(2),
  },

  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',

  },
  backgroundCard: {
    width: wp(72),
    height: wp(55),
    position: 'absolute',
    left: wp(9),
    top: '8%',
    opacity: 0.9,
  },
  foregroundCard: {
    width: wp(75),
    height: wp(58),
    position: 'absolute',
    left: wp(8),
    top: '13%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    elevation: 8,
  },


  bottomSection: {
    paddingBottom: hp(15),
    alignItems: 'center',
  },
});
