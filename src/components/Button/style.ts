import { StyleSheet } from 'react-native';
import { hp, wp } from '../../utils/responsive';
import { FONTS } from '../../constants/fonts';

export default StyleSheet.create({
  touchable: {
    alignSelf: 'center',
  },
  button: {
    width: wp(40),
    height: 52,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(2),

    shadowColor: '#D4AF37',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 6,

    elevation: 5,
  },
  text: {
    fontSize: hp(2),
    color: '#1A1A1A',
    fontFamily: FONTS.pmedium,
  },
  disabled: {
    opacity: 0.5,
  },
});
