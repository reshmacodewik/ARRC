import { StyleSheet, Platform } from 'react-native';
import { hp, wp } from '../../../../utils/responsive';
import { FONTS } from '../../../../constants/fonts';
import { COLORS } from '../../../../constants/colors';

export default StyleSheet.create({

  container: {
    flex: 1,
  },

  heroWrapper: {
    width: wp(92),
    height: hp(45),
    alignSelf: 'center',
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#1A1500',
  },


  radialGlow: {
    position: 'absolute',
    width: wp(92),
    height: hp(50),
    borderRadius: 24,
  },


  backButton: {
    position: 'absolute',
    top: hp(2),
    left: wp(4),
    width: wp(10),
    height: wp(10),
    borderRadius: wp(5),
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  backArrow: {
    color: COLORS.white,
    fontSize: 18,
    fontFamily: FONTS.bold,
    lineHeight: 20,
  },


  heroTitle: {
    position: 'absolute',
    top: hp(2.6),
    alignSelf: 'center',
    color: COLORS.white,
    fontSize: 16,
    fontFamily: FONTS.medium,
    letterSpacing: 0.3,
    zIndex: 5,
  },


  handImage: {
    position: 'absolute',
    bottom: 25,
    width: wp(100),
    height: hp(38),
    resizeMode: 'contain',
  },


  content: {
    flex: 1,
    paddingHorizontal: wp(5),
    paddingTop: hp(3.5),
  },

  heading: {
    fontSize: 24,
    color: COLORS.white,
    fontFamily: FONTS.bold,
    lineHeight: 34,
    marginBottom: hp(0.6),
    fontWeight: '700'
  },

  subheading: {
    fontSize: 14.2,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    lineHeight: 18,
    marginBottom: hp(2.5),
    fontWeight: '400'
  },


  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: wp(2),
    marginBottom: hp(3),
  },


  countryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0EFEF',
    borderRadius: 10,
    paddingHorizontal: wp(3),
    height: 56,
    gap: wp(1.5),
    borderWidth: 1.5,
    borderColor: COLORS.goldGradientStart,
  },

  flagEmoji: {
    fontSize: 22,
  },

  dropdownArrow: {
    fontSize: 11,
    color: '#555',
    marginTop: 1,
  },


  phoneInput: {
    flex: 1,
    height: 56,
    backgroundColor: '#F0EFEF',
    borderRadius: 10,
    paddingHorizontal: wp(4),
    fontSize: 16,
    color: '#1A1A1A',
    borderWidth: 1.5,
    borderColor: COLORS.goldGradientStart,
    fontFamily: FONTS.regular,
  },


  buttonWrapper: {
    alignSelf: 'center',
  },

  otpButton: {
    width: wp(55),
    height: hp(6.5),
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#C49C51',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },

  otpButtonText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: FONTS.semiBold,
    letterSpacing: 0.2,
  },
  background: { flex: 1 },
  buttonContainer: {
    marginTop: hp(1),
  },
});
