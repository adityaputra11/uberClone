import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  font: {
    fontSize: responsiveFont(12),
    marginVertical: 5,
  },
  fontGray: {
    fontSize: responsiveFont(9.5),
    color: '#ccc',
  },
  fontPercent: {
    fontSize: responsiveFont(9.5),
    color: '#f2000c',
    fontWeight: 'bold',
  },
  fontPrice: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
  },
  fontFreeShipping: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
    marginLeft: 10,
  },
  title: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 20,
  },
  titleGreen: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
    marginLeft: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: responsiveFont(10),
    marginLeft: 10,
  },
  sliderItems: {
    height: WIDTH * 0.8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  roundedItem: {
    width: WIDTH * 0.1,
    height: WIDTH * 0.1,
    borderRadius: WIDTH,
    marginRight: 10,
  },
  item: {
    margin: 5,
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  itemPrice: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    margin: 5,
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  percent: {
    padding: 5,
    backgroundColor: '#ffc4c7',
    borderRadius: 5,
    marginRight: 5,
  },
});

export default styles;
