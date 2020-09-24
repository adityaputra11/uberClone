import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import FeedStack from '@stack/FeedStack';
import HeaderSearch from '@components/Module/HeaderSearch';

const HeaderRoot = () => {
  return (
    <View style={styles.container}>
      <HeaderSearch />
      <FeedStack />
    </View>
  );
};

export default HeaderRoot;
