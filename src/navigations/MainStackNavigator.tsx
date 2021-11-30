import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Construction from '../screens/Construction/Index';
import Home from '../screens/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Navigator>
      <Screen name={'Home'} component={Home} options={{headerShown: false}} />
      <Screen name={'Construction'} component={Construction} />
    </Navigator>
  );
};

export default MainStackNavigator;
