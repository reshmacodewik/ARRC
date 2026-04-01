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
    paddingBottom: 100,
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
    height: 200,
    width: '100%',
    position: 'relative',
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  chartImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
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
    top: 0,
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
  },
  chartPointer: {
    position: 'absolute',
    top: 40,
    right: 100,
    alignItems: 'center',
    zIndex: 2,
  },
  pointerDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.white,
    borderWidth: 4,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  pointerLine: {
    width: 3,
    height: 150,
    backgroundColor: COLORS.white,
    marginTop: 2,
  },
  summaryButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 40,
  },
  summaryButton: {
    flex: 1,
    borderRadius: 12,


  },
  summaryButtonInner: {
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  buttonValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonValue: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardsSection: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardsScroll: {
    overflow: 'visible',
  },
  cardItem: {
    width: 280,
    height: 180,
    borderRadius: 24,
    backgroundColor: '#1C1A17',
    padding: 20,
    marginRight: 15,
  },
  cardItemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardLabel: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginBottom: 4,
  },
  cardValue: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
