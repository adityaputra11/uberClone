import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderItems: {
    height: Dimensions.get('window').height * 0.4,
    width: Dimensions.get('window').width,
  },
  dot: {
    position: 'absolute',
  },
});

export default styles;
