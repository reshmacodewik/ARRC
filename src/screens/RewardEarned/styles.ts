import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 56) / 2; // 2 columns with padding + gap

export const rewardStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 40,
    paddingHorizontal: 18,
  },

  pageTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingTop: 8,
    paddingBottom: 24,
    gap: 12,
  },
  pageTitle: {
    color: COLORS.white,
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: 0.2,
  },

  statsGrid: {
    flexDirection: 'row',
    gap: 12,

    marginBottom: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#130e09',
    borderRadius: 16,
    padding: 18,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(196,156,81,0.25)',
    gap: 10,
  },
  statIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C49C51',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statLabel: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 16,
  },
  statValue: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },

  toggleRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28,
  },
  toggleBtnGold: {
    flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  toggleBtnGoldInner: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 14,
    height: 80,
  },
  toggleBtnWhite: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 4,
  },
  toggleLabel: {
    fontSize: 17,
    fontWeight: '700',
  },
  toggleValue: {
    fontSize: 17,
    fontWeight: '200',
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 16,
  },
  sectionTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '700',
  },
  calendarBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(196,156,81,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(196,156,81,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  transactionList: {
    gap: 0,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.05)',
  },
  transactionAvatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  transactionAvatarText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '700',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 3,
  },
  transactionSub: {
    color: 'white',
    fontSize: 12,
  },
  transactionAmountPill: {
    backgroundColor: '#C49C51',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 6,
    minWidth: 58,
    alignItems: 'center',
  },
  transactionAmountText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
