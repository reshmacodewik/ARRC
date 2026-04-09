import { StyleSheet } from 'react-native';
import { hp, wp } from '../../../../utils/responsive';
import { FONTS } from '../../../../constants/fonts';
import { COLORS } from '../../../../constants/colors';

export default StyleSheet.create({
  background: { flex: 1 },

  container: {
    flex: 1,
    paddingHorizontal: wp(5),
  },

  backButton: {
    width: wp(9),
    height: wp(9),
    borderRadius: wp(20),
    marginTop: hp(2),
    overflow: 'hidden',
  },

  backButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },


  heading: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontWeight: '700',
    marginTop: hp(3.5),
  },

  subheading: {
    fontSize: 15,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    marginTop: hp(1),
    lineHeight: 24,
    fontWeight: '400'
  },


  glowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  glowImage: {
    position: 'absolute',
    width: wp(90),
    height: hp(45),
  },

  glowCircle: {
    position: 'absolute',
    backgroundColor: '#C49C51',
    borderRadius: 999,
  },

  faceIconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  faceIconImage: {
    width: wp(20),
    height: wp(20),
    tintColor: 'white',
  },

  bottomArea: {
    paddingBottom: hp(20),
    alignItems: 'center',
  },

  getStartedButton: {
    width: wp(60),
    height: hp(7),
    borderRadius: 50,
    overflow: 'hidden',
  },

  getStartedGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },

  getStartedText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: FONTS.medium,
    fontWeight: '600',
  },
});
