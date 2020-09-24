import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import MenuCollaps from '@components/Module/MenuCollaps';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <MenuCollaps />
    </View>
  );
};

export default SearchScreen;
