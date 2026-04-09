import { StyleSheet, Dimensions } from 'react-native';
import { RADIUS, SPACING } from '../../constants/spacing';
const COLORS = {
  background:   '#0D0D0D',
  surface:      '#1A1A1A',
  gold:         '#C49C51',
  goldLight:    '#F9EDB4',
  white:        '#FFFFFF',
  black:        '#000000',
  textPrimary:  '#FFFFFF',
  textSecondary:'#AAAAAA',
};


const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingHorizontal: SPACING.md,
    paddingBottom: SPACING.xl,
    gap: SPACING.md,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.xs,
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

  avatar: {
    width: 36,
    height: 36,
    borderRadius: RADIUS.full,
    backgroundColor: '#555',
    borderWidth: 1.5,
    borderColor: COLORS.gold,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING.md,
    marginVertical:-SPACING.md
  },

  backBtn: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.full,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.3,
  },

  filterBtn: {
    width: 38,
    height: 38,
    borderRadius: RADIUS.full,
    borderWidth: 1.5,
    borderColor: COLORS.gold,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },

  
  card: {
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 140,
    justifyContent: 'space-between',
  },
  blobTopRight: {
    position: 'absolute',
    width: 70,
    height: 70,
    borderRadius: RADIUS.full,
    top: -20,
    right: -20,
      opacity: 0.9,
  },

  blobBottomLeft: {
    position: 'absolute',
    width:67,
    height: 65,
    borderRadius: RADIUS.full,
    bottom: -17,
    left: 1,
    opacity: 0.9,
  },

  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACING.md,
    marginBottom: SPACING.md,
    zIndex: 1,
  },

  logoWrapper: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.md,
   
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },

  logo: {
    width: 52,
    height: 52,
  },

  cardTitle: {
    flex: 1,
    fontSize: 17,
    fontWeight: '700',
    color: '#1A1A1A',
    lineHeight: 22,
  },

  // CTA button
  rewardBtn: {
    alignSelf: 'flex-end',
    paddingVertical: SPACING.sm + 2,
    paddingHorizontal: SPACING.lg,
    borderRadius: RADIUS.full,
    zIndex: 1,
  },

  rewardBtnText: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

export { COLORS};
export default styles;
