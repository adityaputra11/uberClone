import {StyleSheet, Dimensions, StatusBar} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: WIDTH * 1,
    // position: 'absolute',
  },
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: colorTheme.primaryColor,
    width: StatusBar.currentWidth,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    width: WIDTH * 0.6,
  },
  font: {
    color: '#A9A9A9',
    marginLeft: 5,
  },
  fontGreen: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
  },
  button: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  justRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    marginHorizontal: 10,
  },
});

export default styles;
