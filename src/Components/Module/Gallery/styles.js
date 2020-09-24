import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  sliderItems: {
    height: Dimensions.get('window').width * 0.32,
    width: Dimensions.get('window').width * 0.32,
    margin: 2,
  },
  dot: {
    position: 'absolute',
  },
});

export default styles;
