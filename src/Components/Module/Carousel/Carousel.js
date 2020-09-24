import React, {useState, useEffect, createRef} from 'react';
import {View, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {link} from '@data';

let CurrentSlide = 0;
const Carousel = () => {
  const [images, setImages] = useState(link);

  useEffect(() => {
    setImages(link);
    const interval = setInterval(() => {
      goToNextPage();
    }, 4000);
    return () => clearInterval(interval);
  }, [goToNextPage]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <Image source={{uri: item}} style={styles.sliderItems} />
      </View>
    );
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goToNextPage = () => {
    if (CurrentSlide >= images.length - 1) {
      CurrentSlide = 0;
    }
    flatList?.current?.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  const keyExtractor = (item, index) => {
    return index.toString();
  };

  const flatList = createRef();

  return (
    <View>
      <FlatList
        data={images}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').width}
        horizontal={true}
        pagingEnabled={true}
        flatListRef={React.createRef()}
        showsHorizontalScrollIndicator={false}
        ref={flatList}
      />
    </View>
  );
};

export default Carousel;
