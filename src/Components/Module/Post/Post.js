import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import {Card} from 'react-native-shadow-cards';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {split} from '@util';

const Post = (props) => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);
  useEffect(() => {
    setMenu(MainMenu);
  }, []);
  const onPressDetail = (item) => {
    navigation.navigate('DetailScreen', {item});
  };
  const renderItem = ({item}) => {
    return (
      <Ripple onPress={() => onPressDetail(item)}>
        <Card style={styles.item}>
          <View style={styles.row}>
            <Image
              source={{uri: item.image}}
              // resizeMode={'contain'}
              style={styles.roundedItem}
            />
            <Text>Apple Tree</Text>
          </View>
          <Text style={styles.font}>{split(' Lorem Ipsu')}</Text>
          <Image
            source={{uri: item.image}}
            // resizeMode={'contain'}
            style={styles.sliderItems}
          />
          <View style={styles.itemPrice}>
            <Text style={styles.fontPrice}>Rp 79.000</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.row}>
            <AntDesign
              style={styles.itemPrice}
              name={'like1'}
              size={20}
              color="#ccc"
            />
            <Text style={styles.itemPrice}>Like</Text>
            <Entypo
              style={styles.itemPrice}
              name={'share'}
              size={20}
              color="#ccc"
            />
            <Text style={styles.itemPrice}>Share</Text>
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
      <FlatList
        keyExtractor={keyExtractor}
        snapToAlignment={'start'}
        data={menu}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Post;
