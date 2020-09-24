import React from 'react';
import GalleryScreen from '@screen/GalleryScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedScreen from '@screen/FeedScreen';
import {colorTheme} from '@util';

const Tab = createMaterialTopTabNavigator();

const FeedStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: {color: '#fff', fontWeight: 'bold'},
        style: {backgroundColor: colorTheme.primaryColor},
      }}>
      <Tab.Screen
        name="Home"
        options={{title: 'Updates'}}
        // options={{
        //   headerShown: false,
        // }}
        component={FeedScreen}
      />
      <Tab.Screen
        name="GalleryScreen"
        options={{title: 'Explore'}}
        component={GalleryScreen}
      />
    </Tab.Navigator>
  );
};

export default FeedStack;
