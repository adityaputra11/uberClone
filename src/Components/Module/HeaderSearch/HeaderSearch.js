import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import {colorTheme} from '../../../Util';
// import {useRoute} from '@react-navigation/native';

const HeaderSearch = (props) => {
  const navigation = useNavigation();
  //   const route = useRoute();
  const onPressFav = () => {
    navigation.navigate('SearchScreen');
  };
  return (
    <View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.statusBar,
          backgroundColor:
            props.scroll > 25 ? colorTheme.primaryColor : props.color,
        }}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.container,
          backgroundColor: props.scroll > 25 ? '#fff' : props.color,
        }}>
        <View style={styles.row}>
          <Ripple style={styles.input} onPress={onPressFav}>
            <View style={styles.justRow}>
              <AntDesign
                name={'search1'}
                color={props.scroll > 25 ? '#ccc' : '#fff'}
                size={25}
              />
              <Text style={styles.font}>Cari Sesuatu</Text>
            </View>
          </Ripple>
          <Ripple style={styles.padding} onPress={onPressFav}>
            <MaterialIcons
              name={'favorite'}
              color={props.scroll > 25 ? '#ccc' : '#fff'}
              size={25}
            />
          </Ripple>
          <Ripple style={styles.padding} onPress={onPressFav}>
            <MaterialCommunityIcons
              name={'email'}
              color={props.scroll > 25 ? '#ccc' : '#fff'}
              size={25}
            />
          </Ripple>
          <Ripple style={styles.padding} onPress={onPressFav}>
            <FontAwesome
              name={'bell'}
              color={props.scroll > 25 ? '#cccc' : '#fff'}
              size={25}
            />
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default HeaderSearch;
