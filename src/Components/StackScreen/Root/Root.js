import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '@components/Module/BottomTab';
import DetailScreen from '@screen/DetailScreen';
import FeedScreen from '@screen/FeedScreen';
import {colorTheme} from '@util/Theme';
import SearchScreen from '@screen/SearchScreen';

const Stack = createStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeRoot"
        options={{
          headerShown: false,
        }}
        component={BottomTab}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="DetailScreen"
        component={DetailScreen}
      />
      <Stack.Screen
        options={{
          title: 'Lainnya',
          headerStyle: {
            backgroundColor: colorTheme.primaryColor,
          },
          headerTintColor: '#fff',
        }}
        name="FeedScreen"
        component={FeedScreen}
      />
      <Stack.Screen
        options={{
          title: 'Jelajah Tokopedia',
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
    </Stack.Navigator>
  );
};

export default Root;
