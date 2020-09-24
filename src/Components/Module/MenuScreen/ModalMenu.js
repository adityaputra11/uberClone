import React, {useState, useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {MainMenu} from '@data';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
// import {useNavigation} from '@react-navigation/native';
import Ripple from 'react-native-material-ripple';
import {colorTheme} from '@util';
import Modal from 'react-native-modal';
import Accordion from 'react-native-collapsible/Accordion';
import Section from '../Section';

const SECTIONS = [
  {
    title: 'Featured',
  },
  {
    title: 'Brand Unggulan',
  },
  {
    title: 'Kategori',
  },
  {
    title: 'Halal Corner',
  },
  {
    title: 'Investasi Asuransi & Pinjaman',
  },
  {
    title: 'Pajak',
  },
  {
    title: 'Pendidikan',
  },
  {
    title: 'Tagihan',
  },
  {
    title: 'Top-Up',
  },
  {
    title: 'Travel & Entertainment',
  },
  {
    title: 'Lainnya',
  },
];
const ModalMenu = (props) => {
  // const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);

  const [activeSections, setActiveSession] = useState([]);

  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.content}>
        <Section
          child={
            <View key={section} style={styles.row}>
              <Text style={styles.title}>
                {section.title} {index} {isActive}
              </Text>
              <MaterialIcons
                name={isActive ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
                color={colorTheme.primaryColor}
                size={40}
              />
            </View>
          }
        />
      </View>
    );
  };

  const _updateSections = (item) => {
    console.log('item', item);
    setActiveSession(item);
  };

  const _renderContent = (section) => {
    return (
      <View>
        <FlatList
          data={menu}
          numColumns={4}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    );
  };

  useEffect(() => {
    setMenu(MainMenu);
  }, [props]);

  const onPressMenu = (name) => {
    // navigation.navigate('DetailScreen');
    Alert.alert('Hai', `fitur ${name} segera hadir`);
  };
  const renderItem = ({item}) => {
    return (
      <Ripple onPress={() => onPressMenu(item.name)} style={styles.item}>
        <MaterialCommunityIcons
          name={'home'}
          color={colorTheme.primaryColor}
          size={40}
        />
        <Text style={styles.font}>{item.name}</Text>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };
  return (
    <Modal
      style={styles.modalContainer}
      onBackButtonPress={props.onBackButtonPress}
      onBackdropPress={props.onBackdropPress}
      isVisible={props.isVisible}>
      <View style={styles.container}>
        <Text style={styles.fontTitle}>Jelajah Tokopedia</Text>
        <ScrollView>
          <Accordion
            align="center"
            sections={SECTIONS}
            activeSections={activeSections}
            // renderSectionTitle={_renderSectionTitle}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
          />
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalMenu;
