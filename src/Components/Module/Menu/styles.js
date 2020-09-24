import {StyleSheet} from 'react-native';
import {responsiveFont} from '@util';
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  font: {
    fontSize: responsiveFont(9.5),
  },
  item: {
    margin: 5,
    padding: 5,
    alignItems: 'center',
  },
});

export default styles;
