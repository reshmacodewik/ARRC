import { StyleSheet, Dimensions } from 'react-native';
import { RADIUS, SPACING } from '../../../../../constants/spacing';
import { COLORS } from '../../../../../constants/colors';
import { FONTS } from '../../../../../constants/fonts';

const { width } = Dimensions.get('window');

const SupportTicketListStyles = StyleSheet.create({
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
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  createNewBtn: {
    borderWidth: 1.5,
    backgroundColor: COLORS.goldGradientStart,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.sm - 1,
    marginBottom: SPACING.lg,
    paddingHorizontal: SPACING.lg,
  },

  createNewText: {
    fontSize: 13,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    letterSpacing: 0.2,
  },
  filterRow: {
    flexDirection: 'row',
    gap: SPACING.sm,
    marginBottom: SPACING.md + 4,
  },

  filterPill: {
    paddingVertical: SPACING.sm - 2,
    paddingHorizontal: SPACING.md,
    borderRadius: RADIUS.full,
    borderWidth: 1.5,
    borderColor: COLORS.goldGradientStart,
    backgroundColor: 'transparent',
    height: 35,
    width: 99,
  },

  filterPillActive: {
    backgroundColor: COLORS.goldGradientStart,
    borderColor: COLORS.goldGradientStart,
  },

  filterPillText: {
    fontSize: 13,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    textAlign: 'center',
  },

  filterPillTextActive: {
    color: COLORS.white,
    fontFamily: FONTS.semiBold,
  },

  ticketHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.xs,
  },
  filterScrollContent: {
    flexDirection: 'row',
    gap: SPACING.sm,
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.sm,
    marginBottom: SPACING.sm,
  },

  cardList: {
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
    fontSize: 13,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    lineHeight: 20,
  },

  cardMeta: {
    fontSize: 12,
    fontFamily: FONTS.regular,
    color: COLORS.black,
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
    fontSize: 12,
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },

  cardLastReplyBold: {
    fontFamily: FONTS.semiBold,
    color: COLORS.black,
  },

  cardArrowCircle: {
    width: 30,
    height: 30,
    borderRadius: RADIUS.full,
    backgroundColor: COLORS.goldGradientStart,
    alignItems: 'center',
    justifyContent: 'center',
  },

  badge: {
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: RADIUS.full,
    alignSelf: 'flex-start',
  },

  badgeText: {
    fontSize: 11,
    fontFamily: FONTS.semiBold,
    letterSpacing: 0.1,
  },

  badgeOpen: {
    backgroundColor: COLORS.goldGradientStart,
  },
  badgeOpenText: {
    color: COLORS.white,
  },

  badgeInProgress: {
    backgroundColor: '#634406',
  },
  badgeInProgressText: {
    color: COLORS.white,
  },

  badgeResolved: {
    backgroundColor: '#757575',
  },
  badgeResolvedText: {
    color: COLORS.white,
  },
   emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: SPACING.xl,
    marginTop: SPACING.xl * 2,
  },

  emptyIconCircle: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SPACING.lg,
  },

  emptyText: {
    fontSize: 13,
    fontFamily: FONTS.regular,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.xs + 2,
  },

  emptyLink: {
    fontSize: 14,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default SupportTicketListStyles;
