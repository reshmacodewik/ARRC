import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../../../../constants/colors';
import { RADIUS, SPACING } from '../../../../../constants/spacing';
import { FONTS } from '../../../../../constants/fonts';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
     paddingHorizontal: SPACING.md,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SPACING.md,
  },

  endConvBtn: {
    backgroundColor: COLORS.goldGradientStart,
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.xs + 2,
    paddingHorizontal: SPACING.lg,
    marginBottom: SPACING.lg,
  },

  endConvText: {
    fontSize: 12,
    fontFamily: FONTS.semiBold,
    color: COLORS.white,
    letterSpacing: 0.2,
  },

  messageList: {
    flex: 1,
  },

  messageListContent: {
    paddingBottom: SPACING.md,
    gap: SPACING.lg,
  },

  messageRowAgent: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: SPACING.sm,
  },

  messageRowUser: {
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    gap: SPACING.sm,
  },

  agentAvatarCircle: {
    width: 65,
    height: 65,
    backgroundColor: '#BE97483D',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.goldGradientStart,
    flexShrink: 0,
    borderRadius: RADIUS.full,
    marginBottom: SPACING.lg,
  },
  logo: { width: 45, height: 30, resizeMode: 'contain' },

  agentAvatarText: {
    fontSize: 9,
    fontFamily: FONTS.bold,
    color: COLORS.goldGradientStart,
    letterSpacing: 1,
  },

  userAvatar: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.full,
    overflow: 'hidden',
    flexShrink: 0,
    marginBottom: SPACING.xl,
  },

  userAvatarImage: {
    width: '100%',
    height: '100%',
  },

  bubbleAgent: {
    backgroundColor: COLORS.goldGradientStart,
    borderRadius: RADIUS.xl,
    borderTopLeftRadius: 2,
    paddingVertical: SPACING.md,
    paddingHorizontal: SPACING.xl,
    maxWidth: width * 0.65,
  },

  bubbleUser: {
    backgroundColor: COLORS.white,
    borderRadius: RADIUS.xl,
    borderTopRightRadius: 4,
    paddingVertical: SPACING.lg,
    paddingHorizontal: SPACING.lg,
    maxWidth: width * 0.62,
  },

  bubbleAgentText: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: COLORS.white,
    lineHeight: 20,
    textAlign: 'center',
  },

  bubbleUserText: {
    fontSize: 15,
    fontFamily: FONTS.medium,
    color: COLORS.black,
    lineHeight: 20,
    textAlign: 'center',
  },

  timestampAgent: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginTop: SPACING.xs,
    marginRight: 80 + SPACING.xl,

    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  timestampUser: {
    fontSize: 11,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    marginTop: SPACING.xs,
    marginLeft: 90 + SPACING.md,
  },

  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.lg,
    marginTop: SPACING.sm,
    backgroundColor: 'rgba(255,255,255,0.07)',
    borderRadius: RADIUS.full,
    paddingVertical: SPACING.sm,
    paddingHorizontal:SPACING.md,
    gap: SPACING.sm,
    borderWidth: 2,
    borderColor: '#605F5F',
  },

  cameraBtn: {
    width: 34,
    height: 34,
    borderRadius: RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },

  textInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: FONTS.regular,
    color: COLORS.white,
    paddingVertical: 0,
  },

  sendBtn: {
    width: 34,
    height: 34,
    borderRadius: RADIUS.full,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
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

export default styles;
