import React, {useState, useEffect} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';
import styles from './styles';
import Post from '@components/Module/Post';

const FeedScreen = () => {
  const [headerScroll, setHeaderScroll] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.back} />
      <ScrollView
        onScroll={(event) => {
          setHeaderScroll(event.nativeEvent.contentOffset.y);
        }}
        style={styles.position}>
        <Post />
      </ScrollView>
    </View>
  );
};

export default FeedScreen;
