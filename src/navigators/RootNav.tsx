import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Routes from '~/constants/Routes';
import App from '~/screens/App';

const RootNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Routes.app} component={App} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNav;
