import { StyleSheet } from 'react-native';
import { hp } from '../../../utils/responsive';

export default StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: hp(20),
    height: hp(20),
    resizeMode: 'contain',
  },
});