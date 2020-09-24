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
import Accordion from 'react-native-collapsible/Accordion';
import Section from '../Section';
import {menuTitle} from '@data';

const MenuCollaps = (props) => {
  // const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);

  const [activeSections, setActiveSession] = useState([]);

  const _renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.content}>
        <Section
          child={
            <View key={section} style={styles.row}>
              <Text style={styles.title}>{section.title}</Text>
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
  const renderItem = ({item, index}) => {
    return (
      <Ripple key={index} onPress={() => onPressMenu(item.name)}>
        <View style={styles.item}>
          <MaterialCommunityIcons
            name={item.icon}
            color={colorTheme.primaryColor}
            size={40}
          />
        </View>
        <Text style={styles.font}>{item.name}</Text>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <Accordion
          key={'Accordion'}
          align="center"
          sections={menuTitle}
          activeSections={activeSections}
          // renderSectionTitle={_renderSectionTitle}
          renderHeader={_renderHeader}
          renderContent={_renderContent}
          onChange={_updateSections}
        />
      </ScrollView>
    </View>
  );
};

export default MenuCollaps;
