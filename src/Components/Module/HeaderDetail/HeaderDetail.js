import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import {colorTheme} from '../../../Util';
// import {useRoute} from '@react-navigation/native';

const HeaderDetail = (props) => {
  const navigation = useNavigation();
  //   const route = useRoute();
  const onPressFav = () => {
    navigation.navigate('SearchScreen');
  };
  const onBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.statusBar,
          backgroundColor: colorTheme.primaryColor,
        }}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.container,
          backgroundColor: props.scroll > 25 ? '#fff' : props.color,
        }}>
        <View style={styles.row}>
          <Ripple rippleOpacity={0} onPress={onBack}>
            <Ionicons name={'arrow-back'} color={'#000'} size={25} />
          </Ripple>
          <Ripple style={styles.input} onPress={onPressFav}>
            <View style={styles.justRow}>
              <AntDesign name={'search1'} color={'#ccc'} size={25} />
              <Text style={styles.font}>Cari Sesuatu</Text>
            </View>
          </Ripple>
          <Ripple style={styles.padding} onPress={onPressFav}>
            <Entypo name={'share'} color={'#ccc'} size={25} />
          </Ripple>
          <Ripple style={styles.padding} onPress={onPressFav}>
            <FontAwesome name={'shopping-cart'} color={'#ccc'} size={25} />
          </Ripple>
          <Ripple style={styles.padding} onPress={onPressFav}>
            <Entypo name={'dots-three-vertical'} color={'#ccc'} size={25} />
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default HeaderDetail;
