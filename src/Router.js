import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Details from './Pages/Details/Details';
import { Products } from './Pages/Products/Products';
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products Page" component={Products} />
        <Stack.Screen name="Details Page" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
