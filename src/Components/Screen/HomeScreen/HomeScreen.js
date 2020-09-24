import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Carousel from '@components/Module/Carousel';
import Wallet from '@components/Module/Wallet';
import HeaderSearch from '@components/Module/HeaderSearch';
import Menu from '@components/Module/Menu';
import Discount from '@components/Module/Discount';
import {ScrollView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [headerScroll, setHeaderScroll] = useState(0);
  const navigation = useNavigation();
  //   const route = useRoute();
  const onPressMenu = () => {
    navigation.navigate('SearchScreen');
  };
  useEffect(() => {
    // setHeaderScroll(0);
    console.log(headerScroll);
    // return () => setHeaderScroll(0);
  }, [headerScroll]);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor={'transparent'} />
      <ScrollView
        onScroll={(event) => {
          setHeaderScroll(event.nativeEvent.contentOffset.y);
        }}
        style={styles.position}>
        <Carousel key={'carousel'} />
        <Wallet key={'wallet'} />
        <Menu key={'menu'} onPressMenu={onPressMenu} />
        <Discount key={'promo'} title={'Terlaris Untukmu'} />
        <Discount key={'product'} title={'Produk Terbaru'} />
      </ScrollView>
      <HeaderSearch scroll={headerScroll} color="transparent" />
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
