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

  /* ─── Back Button ─────────────────────────────────────────── */
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
    lineHeight: 34,

  },

  subheading: {
    fontSize: 16,
    color: COLORS.white,
    fontFamily: FONTS.regular,
    lineHeight: 24,
    marginTop: hp(2)
  },


  uploadBox: {
    width: '100%',
    height: hp(18),
    backgroundColor: '#EEEEF0',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3.5),
  },

  uploadIcon: {
    marginBottom: hp(1),
  },

  uploadText: {
    fontSize: 16,
    color: '#00000080',
    fontFamily: FONTS.regular,
    fontWeight: "400"
  },


  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2.5),
    gap: wp(3),
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
    letterSpacing: 1,
  },


  cameraButton: {
    marginTop: hp(2.5),
    borderRadius: 15,
    overflow: 'hidden',
    height: hp(7),
  },

  cameraButtonGradient: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    gap: wp(3),
  },

  cameraButtonText: {
    fontSize: 16,
    color: '#1A1A1A',
    fontFamily: FONTS.medium,
    fontWeight: '500',
    textAlign: 'center',

  },
});
