import React, {useState, useEffect, createRef} from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {link} from '@data';

let CurrentSlide = 0;
const Gallery = () => {
  const [images, setImages] = useState(link);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={{uri: item}} style={styles.sliderItems} />
      </View>
    );
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Gallery;
