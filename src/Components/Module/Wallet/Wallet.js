import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import {colorTheme} from '@util';

const Wallet = () => {
  return (
    <View style={styles.container}>
      <AntDesign name={'scan1'} color={'gray'} size={25} />
      <View style={styles.row}>
        <AntDesign name={'codepen-circle'} color={'purple'} size={25} />
        <View style={styles.item}>
          <Text style={styles.font}>Rp.100.0000</Text>
          <Text style={styles.fontGreen}>Top-Up Ovo</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Foundation
          name={'price-tag'}
          color={colorTheme.primaryColor}
          size={25}
        />
        <View style={styles.item}>
          <Text style={styles.font}>Kupon Saya</Text>
          <Text style={styles.fontGreen}>5 Kupon Baru</Text>
        </View>
      </View>
    </View>
  );
};

export default Wallet;
