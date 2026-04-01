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
    width: wp(8),
    height: wp(8),
    borderRadius: wp(20),
    marginTop: hp(1.5),
    overflow: 'hidden',
  },

  backButtonGradient: {
    width: '100%',
    height: '100%',
    borderRadius: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },


  illustrationWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(2),
    height: hp(28),
  },

  otpImage: {
    width: 200,
    height: 208,
    resizeMode: 'contain',
  },


  heading: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: hp(2),
  },

  subheading: {
    fontSize: 14.5,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    textAlign: 'center',
    marginTop: hp(2),
    lineHeight: 20,
    paddingHorizontal: wp(8),
    fontWeight: '400'
  },


  otpRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: wp(4),
    marginTop: hp(3.5),
  },

  otpBox: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: '#F0EFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpInput: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontSize: 22,
    color: COLORS.black,
    fontFamily: FONTS.bold,
    borderRadius: 12,
  },


  timer: {
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 15,
    fontFamily: FONTS.regular,
    marginTop: hp(2.5),
    letterSpacing: 1.5,
  },


  buttonContainer: {
    marginTop: hp(2),
  },


  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2.5),
  },

  resendText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 13,
    textDecorationLine: 'underline',
  },

  resendBold: {
    color: COLORS.white,
    fontFamily: FONTS.bold,
    fontSize: 13,
    textDecorationLine: 'underline',
  },
});
