import React from 'react';
import {View} from 'react-native';
import styles from './styles';
const Wallet = (props) => {
  return <View style={styles.container}>{props.child}</View>;
};

export default Wallet;
