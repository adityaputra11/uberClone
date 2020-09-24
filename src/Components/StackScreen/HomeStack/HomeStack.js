import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screen/HomeScreen';
import DetailScreen from '@screen/DetailScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{title: 'My home'}}
        // options={{
        //   headerShown: false,
        // }}
        component={HomeScreen}
      />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
