import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../constants/colors';

const { width } = Dimensions.get('window');

export const SCREEN_PADDING = 20;
export const BAR_SECTION_HEIGHT = 160;

const TOTAL_GAP = SCREEN_PADDING * 2 + 12 * 4;
export const BAR_WIDTH = (width - TOTAL_GAP) / 5;

export const colors = {
  bg: '#0a0804',
  bgCard: '#130e09',
  white: '#FFFFFF',
  black: '#000000',
  gold: '#C49C51',
  goldLight: '#E8C97A',
  goldLighter: '#F0DCA0',
  goldPale: '#F5E8C0',
  goldFaint: '#F9F0D8',
  textPrimary: '#FFFFFF',
  textMuted: 'rgba(255,255,255,0.45)',
  divider: 'rgba(255,255,255,0.06)',
  avatarDark: '#2a1f14',
  avatarMid: '#8A7A66',
  border: 'rgba(196,156,81,0.2)',
};

export const BAR_COLORS: [string, string][] = [
  ['#A07828', '#C49C51'],
  ['#B08A3A', '#CCA85A'],
  ['#C4A060', '#DFC080'],
  ['#D0B080', '#E8D0A0'],
  ['#DFC8A0', '#F0E0C0'],
];

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 48,
    paddingHorizontal: SCREEN_PADDING,
  },

  chartSection: {
    paddingTop: 8,
    paddingBottom: 4,
  },
  barsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: BAR_SECTION_HEIGHT,
    gap: 12,
  },
  barCol: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  bar: {
    width: '100%',
    borderRadius: 10,
  },
  barLabel: {
    color: colors.textPrimary,
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },

  toggleRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
    marginBottom: 28,
  },
  toggleGold: {
    flex: 1,
    borderRadius: 14,
    overflow: 'hidden',
  },
  toggleGoldInner: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 14,
    height: 60,
  },

  toggleWhite: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
    gap: 5,
  },
  toggleLabelLight: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.white,
  },
  toggleLabelDark: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.black,
  },
  toggleValueLight: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.white,
  },
  toggleValueDark: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.black,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2,
    flexShrink: 1,
  },
  calendarBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(196,156,81,0.12)',
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },

  listWrapper: {},
  txItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  txAvatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  txAvatarText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '700',
  },
  txInfo: {
    flex: 1,
  },
  txTitle: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 3,
  },
  txSub: {
    color: colors.textMuted,
    fontSize: 12,
    fontWeight: '400',
  },
  txRight: {
    alignItems: 'flex-end',
    gap: 5,
  },
  txAmountPill: {
    backgroundColor: colors.gold,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 6,
    minWidth: 72,
    alignItems: 'center',
  },
  txAmountText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  txRewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  txRewardLabel: {
    color: colors.textMuted,
    fontSize: 11,
  },
  txRewardValue: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '600',
  },
  popupContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignSelf: 'center',
    elevation: 10,
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sheet: {
    backgroundColor: '#fafaf8',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
  },
  handle: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ddd',
    alignSelf: 'center',
    marginBottom: 16,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  selectedDateText: {
    color: '#C49C51',
    fontSize: 12,
    fontWeight: '500',
    marginTop: 3,
  },
});
