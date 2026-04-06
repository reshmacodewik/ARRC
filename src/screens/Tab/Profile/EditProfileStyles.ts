import { StyleSheet } from 'react-native';
import { SPACING } from '../../../constants/spacing';
export const COLORS = {
  primary: '#F9EDB4',
  goldGradientStart: '#C49C51',
  goldGradientEnd: '#C2984C',
  black: '#000000',
  background: '#0A0A0A',
  white: '#FFFFFF',
  textSecondary: '#A1A1A1',
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl,
  },

  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingTop: SPACING.sm,
    paddingBottom: SPACING.sm,
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  crownIcon: {
    color: COLORS.goldGradientStart,
    fontSize: 16,
  },

  brandText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 2,
  },

  topBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
  },

  bellIcon: {
    fontSize: 20,
  },

  topAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#555',
    borderWidth: 1.5,
    borderColor: COLORS.goldGradientStart,
  },

  // ── Page Header ─────────────────────────────────────────────────────────────
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    gap: SPACING.md,
  },

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.goldGradientStart,
    alignItems: 'center',
    justifyContent: 'center',
  },

  backArrow: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 28,
    marginTop: -2,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  // ── Avatar ───────────────────────────────────────────────────────────────────
  avatarSection: {
    alignItems: 'center',
    marginTop: SPACING.lg,
    marginBottom: SPACING.lg,
    position: 'relative',
  },

  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: '#333',
  },

  avatar: {
    width: '100%',
    height: '100%',
  },

  editIconBtn: {
    position: 'absolute',
    bottom: -5,
    right: '39%',
  },

  editIconGradient: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  editIconText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },


  form: {
    gap: SPACING.xs,
  },

  fieldLabel: {
    color: COLORS.textSecondary,
    fontSize: 20,
    fontWeight: '400',
    marginTop: SPACING.md,
    marginBottom: SPACING.xs,
    marginLeft: 2,
  },

  inputBox: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingHorizontal: SPACING.md,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    color: COLORS.black,
    fontSize: 15,
    fontWeight: '500',
    padding: 0,
  },

  dropdownArrow: {
    color: COLORS.black,
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 8,
  },

  dropdownList: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    marginTop: 4,
    overflow: 'hidden',
  },

  dropdownItem: {
    paddingHorizontal: SPACING.md,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },

  dropdownItemText: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: '500',
  },

  saveButtonWrapper: {
    marginHorizontal: SPACING.md,
    marginTop: SPACING.lg,
    marginBottom: SPACING.md,
  },

  primaryBtn: {
    borderRadius: 30,

    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 180,
    alignSelf: 'center',
  },

  primaryBtnText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export default styles;
