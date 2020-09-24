import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import Gallery from '@components/Module/Gallery/Gallery';
import Category from '@components/Module/Category/Category';

const GalleryScreen = () => {
  return (
    <View style={styles.container}>
      <Category />
      <Gallery />
    </View>
  );
};

export default GalleryScreen;
