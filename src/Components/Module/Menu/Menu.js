import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainMenu} from '@data';
import {FlatList} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import {colorTheme} from '@util';

const Menu = (props) => {
  // const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);
  useEffect(() => {
    setMenu(MainMenu);
  }, []);
  const renderItem = ({item}) => {
    return (
      <Ripple onPress={props.onPressMenu} style={styles.item}>
        <MaterialCommunityIcons
          name={item.icon}
          color={colorTheme.primaryColor}
          size={40}
        />
        <Text style={styles.font}>{item.name}</Text>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={menu}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Menu;
