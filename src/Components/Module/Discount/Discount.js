import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import {Card} from 'react-native-shadow-cards';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {split} from '@util';

const Discount = (props) => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);
  useEffect(() => {
    setMenu(MainMenu);
  }, []);
  const onPressDetail = (item) => {
    navigation.navigate('DetailScreen', {item});
  };
  const onPressMore = () => {
    navigation.navigate('FeedScreen');
  };
  const renderItem = ({item}) => {
    return (
      <Ripple onPress={() => onPressDetail(item)}>
        <Card style={styles.item}>
          <Image
            source={{uri: item.image}}
            // resizeMode={'contain'}
            style={styles.sliderItems}
          />
          <View style={styles.itemPrice}>
            <View style={styles.row}>
              {/* <View style={styles.percent}>
                <Text style={styles.fontPercent}>50%</Text>
              </View> */}
              <Text style={styles.font}>{split(' Lorem Ipsu')}</Text>
            </View>

            <Text style={styles.fontPrice}>Rp 79.000</Text>
            <View style={styles.row}>
              <Stars
                default={4}
                count={5}
                // half={true}
                starSize={50}
                fullStar={<Icon size={15} name={'star'} color={'orange'} />}
                emptyStar={
                  <Icon size={15} name={'star-outline'} color={'orange'} />
                }
                halfStar={
                  <Icon size={15} name={'star-half'} color={'orange'} />
                }
              />
              <Text style={styles.fontGray}>{'(40)'}</Text>
            </View>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="truck-fast-outline"
                size={25}
                color="green"
              />
              <Text style={styles.fontFreeShipping}>{'Bebas\nOngkir'}</Text>
            </View>
          </View>
        </Card>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowTitle}>
        <Text style={styles.title}>{props.title}</Text>
        <Ripple rippleOpacity={0} onPress={onPressMore}>
          <Text style={styles.titleGreen}>Lihat Semuanya</Text>
        </Ripple>
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        horizontal
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').width * 0.5}
        data={menu}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Discount;
