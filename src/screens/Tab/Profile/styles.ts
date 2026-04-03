import { StyleSheet, Dimensions } from 'react-native';
import { SPACING } from '../../../constants/spacing';

const { width } = Dimensions.get('window');

export const COLORS = {
  background: '#0D0D0D',
  white: '#FFFFFF',
  black: '#000000',
  gold: '#C49C51',
  goldLight: '#F9EDB4',
  textPrimary: '#FFFFFF',
  textDark: '#1A1A1A',
  textGray: '#888888',
  menuBg: '#FFFFFF',
  cardRadius: 16,
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingHorizontal: SPACING.md,
  },

  scrollContent: {
    paddingBottom: SPACING.xl,
  },

  // ── Top Bar ─────────────────────────────────────────────────────────────────
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: SPACING.sm,
    paddingBottom: SPACING.sm,
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  crownIcon: {
    color: COLORS.gold,
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
    borderColor: COLORS.gold,
  },
  backBtn: {
    marginLeft: SPACING.md,
    marginTop: SPACING.sm,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.gold,
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

  // ── Profile Section ─────────────────────────────────────────────────────────
  profileSection: {
    alignItems: 'center',
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.xl,
  },

  avatarWrapper: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: COLORS.white,
    marginBottom: SPACING.md,
    backgroundColor: '#333',
  },

  avatar: {
    width: '100%',
    height: '100%',
  },

  userName: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: SPACING.xs,
    letterSpacing: 0.3,
  },

  userPhone: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  switch: { marginTop: -7 },

  menuContainer: {
    gap: SPACING.sm,
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.menuBg,
    borderRadius: COLORS.cardRadius,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.md + 2,
    height: 51,
  },

  menuLabel: {
    color: COLORS.textDark,
    fontSize: 15,
    fontWeight: '500',
    marginTop:-1.5
  },

  arrowCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowIcon: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 24,
    marginTop: -1,
  },
});

export default styles;
