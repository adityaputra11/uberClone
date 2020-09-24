import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFont} from '@util';
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
  },
  contentContainer: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    // right: 10,
  },
  content: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 0.5,
  },
  modalContainer: {
    margin: 0,
  },
  title: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
  },
  font: {
    fontSize: responsiveFont(9.5),
    alignSelf: 'center',
  },
  fontTitle: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    right: 10,
  },
  item: {
    margin: 5,
    padding: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 20,
    width: WIDTH * 0.2,
    height: WIDTH * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
