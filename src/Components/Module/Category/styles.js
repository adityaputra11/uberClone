import {StyleSheet} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  font: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
  },
  fontGreen: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 20,
    margin: 10,
  },
});

export default styles;
