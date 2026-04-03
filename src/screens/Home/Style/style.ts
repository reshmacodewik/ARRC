import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/colors';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  greetingContainer: {
    marginBottom: 20,
  },
  greetingText: {
    color: COLORS.goldGradientEnd,
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  userName: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: 'bold',
  },
  balanceContainer: {
    marginBottom: 30,
  },
  balanceTitle: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '60%',
  },
  chartContainer: {
    height: 180,
    width: '100%',
    position: 'relative',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  axisLinesContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
    paddingVertical: 10,
    zIndex: 1,
  },
  axisLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  axisLabel: {
    color: COLORS.textSecondary,
    fontSize: 10,
    width: 35,
  },
  dashedLine: {
    flex: 1,
    height: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    borderStyle: 'dashed',
  },
  tooltipContainer: {
    position: 'absolute',
    top: -20,
    right: 60,
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 8,
    zIndex: 3,
  },
  tooltipDate: {
    color: COLORS.textSecondary,
    fontSize: 8,
    marginBottom: 2,
  },
  tooltipValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tooltipValue: {
    color: COLORS.black,
    fontSize: 14,
    fontWeight: 'bold',
  },
  tooltipPercentage: {
    backgroundColor: '#E8F5E9',
    color: '#4CAF50',
    fontSize: 10,
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
    overflow: 'hidden',
  },
  chartPointer: {
    position: 'absolute',
    top: 25,
    right: 100,
    alignItems: 'center',
    zIndex: 2,
    height: 155, // Adjusted to match the chart line spanning down
  },
  pointerDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: COLORS.white,
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  pointerLine: {
    width: 2,
    flex: 1,
    backgroundColor: COLORS.white,
    marginTop: 2,
  },
  summaryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  summaryButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  summaryButtonInner: {
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
  },
  summaryButtonInners: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    height: 60,
  },
  buttonTitle: {
    fontSize: 12,
    fontWeight: '600',
  },
  buttonValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  buttonValue: {
    fontSize: 14,
    fontWeight: '700',
  },
  cardsSection: {
    marginBottom: 30,
  },
  sectionHeaderCentered: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: '500',
    fontFamily: 'SFProDisplay-Semibold',
    marginBottom: 15,
  },
  cardsScroll: {
    paddingRight: 20,
  },
  cardItem: {
    width: 355,
    height: 180,
    borderRadius: 20,
    overflow: 'hidden',
    padding: 20,
    marginRight: 15,
    paddingTop: 25,
    justifyContent: 'space-between',
    backgroundColor: '#2C241F',
  },
  stripe: {
    height: 36,
    marginHorizontal: -20,
    marginTop: 8,
    marginBottom: 16,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 'auto' as any,
    flex: 1,
  },
  label: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 1,
    marginBottom: 2,
  },
  value: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,
  },
  cardTitle: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 19,
    fontWeight: '500',
  },
  cardActionsIcons: {
    flexDirection: 'row',
    gap: 10,
  },
  chipIconWrapper: {
    width: 35,
    height: 35,
    backgroundColor: '#C49C513B',
    borderRadius: 6,
    marginTop: 5,
  },
  cardBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  cardActionBtnsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  cardActionBtn: {
    alignItems: 'center',
  },
  cardActionIconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#C49C513B',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  cardActionBtnText: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 8,
    textAlign: 'center',
  },
  arrcLogoText: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  paginationDotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },

  paginationDotActive: {
    backgroundColor: COLORS.goldGradientStart,
  },

  paginationDotInactive: {
    backgroundColor: '#ccc',
  },
  rewardSection: {
    marginBottom: 30,
  },
  rewardBoxGradientBorder: {
    borderRadius: 20,
    padding: 1,
    marginBottom: 0,
  },
  rewardBox: {
    borderRadius: 20,

    backgroundColor: '#000000',
    overflow: 'hidden',
  },
  nextGoalTag: {
    paddingVertical: 7,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
    width: 170,
    marginTop: 5,
    height: 50,
  },
  nextGoalText: {
    color: COLORS.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rewardBoxInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
  },
  rewardLeftCol: {
    flex: 1,
    gap: 10,
    paddingRight: 20,
  },
  rewardButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  rewardButtonInner: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 12,
  },
  rewardButtonInners: {
    paddingVertical: 10,
    alignItems: 'center',
    height: 65,
    borderRadius: 12,
  },
  rewardRightCol: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
  },
  progressCircleContainer: {
    width: 85,
    height: 85,
    borderRadius: 45,
    borderWidth: 6,
    borderColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  progressCircleStroke: {
    position: 'absolute',
    top: -6,
    left: -6,
    right: -6,
    bottom: -6,
    borderWidth: 6,
    borderColor: COLORS.goldGradientStart,
    borderRadius: 46,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  progressTitle: {
    color: COLORS.textSecondary,
    fontSize: 10,
    textAlign: 'center',
  },
  progressValue: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  completedText: {
    color: COLORS.white,
    fontSize: 12,
  },
  rewardSuccessMessageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
  },
  successIcon: {
    width: 20,
    height: 20,

    alignItems: 'center',
    justifyContent: 'center',
  },
  rewardSuccessMessage: {
    color: COLORS.white,
    fontSize: 15,
    fontFamily: 'SFProDisplay-Medium',
  },
  transactionsSection: {
    marginBottom: 30,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  transactionAvatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#473A25',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionAvatarText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  transactionTitleText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  transactionSubText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontFamily: 'SFProDisplay-Regular',
    fontWeight: '200',
  },
  transactionRight: {
    alignItems: 'flex-end',
  },
  transactionAmountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#BE9748',
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 12,
    marginBottom: 4,
  },
  transactionAmount: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  transactionRewardText: {
    color: COLORS.textSecondary,
    fontSize: 10,
  },
  transitionSection: {
    marginBottom: 30,
  },
  transitionBox: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(196,156,81,0.2)',
    padding: 20,
    backgroundColor: '#0A0A0A',
  },
  gradientBorder: {
    borderRadius: 20,
    padding: 1,
    marginTop: 10,
  },

  glassContainer: {
    borderRadius: 20,
    overflow: 'hidden',

    padding: 15,
  },
  barChartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  barCol: {
    alignItems: 'center',
  },
  bar: {
    width: 55,
    borderRadius: 6,
    backgroundColor: COLORS.goldGradientStart,
    marginBottom: 8,
  },
  barLabel: {
    color: COLORS.textSecondary,
    fontSize: 10,
  },

  // Boosted Offers
  offersSection: {
    marginBottom: 30,
  },
  offerCardRow: {
    flexDirection: 'row',
    gap: 15,
  },
  offerCard: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Light green
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  offerCardCircleBg1: {
    position: 'absolute',
    top: -37,
    right: -20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#08711233',
  },
  offerCardCircleBg2: {
    position: 'absolute',
    bottom: -20,
    left: -20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#08711233',
  },
  offerLogoCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#302922',
    marginRight: 12,
    marginTop: -30,
  },
  offerLogoImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  offerTextContent: {
    flex: 1,
  },
  offerTitle: {
    color: '#000',
    fontSize: 17,
    fontWeight: '500',
    marginBottom: 10,
  },
  offerBtn: {
    backgroundColor: '#006B1A',
    alignSelf: 'flex-end',
    paddingHorizontal: 22,
    paddingVertical: 8,
    borderRadius: 16,
  },
  offerBtnText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});
