/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {category} from '@data';
import {FlatList} from 'react-native-gesture-handler';

const Category = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Text>{item}</Text>
      </View>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };
  return (
    <View>
      <FlatList
        data={category}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Category;
