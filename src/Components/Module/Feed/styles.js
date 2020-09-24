import {StyleSheet} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: '#ccc',
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
    marginHorizontal: 10,
  },
});

export default styles;
