import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../constants/colors';
import { RADIUS, SPACING } from '../../../../constants/spacing';
import { FONTS } from '../../../../constants/fonts';


const { width } = Dimensions.get('window');

const SupportSharedStyles = StyleSheet.create({

  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: SPACING.xl + SPACING.lg,
     paddingHorizontal: SPACING.md,
  },

  screenPadding: {

  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.md,
    paddingVertical: SPACING.md + 2,
    paddingHorizontal: SPACING.md,
    marginTop: SPACING.sm,
    height:53
  },

  menuItemText: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    letterSpacing: 0.1,
  },

  menuArrowCircle: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.goldGradientStart,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ticketHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
    paddingHorizontal: SPACING.md,
  },

  createNewBtn: {
    borderWidth: 1.5,
    borderColor: COLORS.goldGradientStart,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.sm - 2,
    paddingHorizontal: SPACING.md,
  },

  createNewText: {
    fontSize: 13,
    fontFamily: FONTS.semiBold,
    color: COLORS.goldGradientStart,
    letterSpacing: 0.2,
  },
  filterRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    paddingHorizontal: SPACING.md,
    marginBottom: SPACING.md + 4,
  },

  filterPill: {
    paddingVertical: SPACING.sm - 2,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.full,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.25)',
    backgroundColor: 'transparent',
  },

  filterPillActive: {
    backgroundColor: COLORS.goldGradientStart,
    borderColor: COLORS.goldGradientStart,
  },

  filterPillText: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: 'rgba(255,255,255,0.55)',
  },

  filterPillTextActive: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },

  // ─── Ticket Card ──────────────────────────────────────────────────────────
  cardList: {
    paddingHorizontal: SPACING.md,
    gap: SPACING.sm + 2,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.lg,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.md,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },

  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: SPACING.sm,
    marginBottom: SPACING.xs + 2,
  },

  cardTitle: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
    lineHeight: 20,
  },

  cardMeta: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    marginBottom: SPACING.xs - 2,
    lineHeight: 18,
  },

  cardDivider: {
    height: 1,
    backgroundColor: '#EFEFEF',
    marginVertical: SPACING.sm,
  },

  cardBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cardLastReply: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
  },

  cardLastReplyBold: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },

  cardArrowCircle: {
    width: 28,
    height: 28,
    borderRadius: RADIUS.full,
    backgroundColor: 'rgba(201,150,42,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ─── Status Badge ─────────────────────────────────────────────────────────
  badge: {
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: RADIUS.full,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontSize: 11,
    fontFamily: FONTS.semiBold,
    letterSpacing: 0.1,
  },

  badgeOpen: {
    backgroundColor: 'rgba(201,150,42,0.15)',
  },
  badgeOpenText: {
    color: COLORS.goldGradientStart,
  },

  badgeInProgress: {
    backgroundColor: 'rgba(42,125,201,0.12)',
  },
  badgeInProgressText: {
    color: '#2A7DC9',
  },

  badgeResolved: {
    backgroundColor: 'rgba(120,120,120,0.12)',
  },
  badgeResolvedText: {
    color: '#7A7A7A',
  },
});

export default SupportSharedStyles;
