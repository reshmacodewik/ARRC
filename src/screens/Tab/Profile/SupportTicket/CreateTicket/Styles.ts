import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../../constants/colors';
import { FONTS } from '../../../../../constants/fonts';
import { RADIUS, SPACING } from '../../../../../constants/spacing';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl + SPACING.lg,
  },

  fieldLabel: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs,
    marginTop: SPACING.md,
    letterSpacing: 0.1,
  },

  textInput: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },

  dropdownBtn: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  dropdownBtnText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },

  dropdownMenu: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    marginTop: SPACING.xs,
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  dropdownItem: {
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.md,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  dropdownItemText: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.black,
  },

  textarea: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.black,
    height: 140,
    textAlignVertical: 'top',
  },

  uploadBtn: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginTop: SPACING.xl,
  },

  cancelBtn: {
    flex: 1,
    height: 52,
    borderRadius: RADIUS.full,
    borderWidth: 1.5,
    borderColor: COLORS.goldGradientStart,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  cancelBtnText: {
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
  },

  submitBtn: {
    flex: 1,
    height: 52,
    borderRadius: RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
  },

  submitBtnText: {
    fontSize: 15,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },

  successContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.xl,
  },

  successIconOuter: {
    width: 100,
    height: 100,
    borderRadius: RADIUS.full,
    backgroundColor: '#27AE60',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.xl,
    shadowColor: '#27AE60',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 8,
  },
  CheckIcon: {
    width: 100,
    height: 100,
    marginBottom: SPACING.xl,
  },
  successTitle: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: SPACING.sm,
    lineHeight: 26,
  },

  successSubtitle: {
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;
