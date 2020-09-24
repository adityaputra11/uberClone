import {StyleSheet, Dimensions} from 'react-native';
import {colorTheme} from '@util';
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  position: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  back: {
    backgroundColor: colorTheme.primaryColor,
    width: WIDTH,
    height: WIDTH * 0.1,
    borderBottomRightRadius: WIDTH,
    borderBottomLeftRadius: WIDTH,
    position: 'absolute',
  },
});

export default styles;
