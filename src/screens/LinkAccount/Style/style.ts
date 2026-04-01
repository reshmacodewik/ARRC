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
    marginTop: hp(4),
  },
  subheading: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    marginTop: hp(1.5),
    lineHeight: 24,
    fontWeight: '400',
  },


  inputContainer: {
    marginTop: hp(3),
  },
  inputGroup: {
    marginBottom: hp(2),
  },
  inputLabel: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 14,
    marginBottom: hp(1),
  },
  textInput: {
    height: 44,
    backgroundColor: '#F0EFEF',
    borderRadius: 10,
    paddingHorizontal: wp(4),
    fontSize: 16,
    color: COLORS.black,
    borderWidth: 1,
    borderColor: '#BE9748',
    fontFamily: FONTS.regular,
  },
  dropdownInput: {
    height: 44,
    backgroundColor: '#F0EFEF',
    borderRadius: 10,
    paddingHorizontal: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#BE9748',
  },
  dropdownText: {
    fontSize: 16,
    color: COLORS.black,
    fontFamily: FONTS.regular,
  },


  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(3),
    paddingHorizontal: wp(15),
  },
  orLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#3A3A3A',
  },
  orText: {
    color: COLORS.white,
    fontFamily: FONTS.regular,
    fontSize: 13,
    marginHorizontal: wp(3),
  },


  skipButton: {
    width: wp(50),
    height: 56,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#C49C51',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontWeight: '600',
  },
});
