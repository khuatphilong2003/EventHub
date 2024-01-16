import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList, LoginScreen} from './type';
import SigninScreen from '@/screens/auth/SigninScreen';
import OnbroadingScreen from '@/screens/auth/OnbroadingScreen';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="OnbroadingScreen" component={OnbroadingScreen}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SigninScreen" component={SigninScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
