import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import { WelcomeScreen } from './type';
import AppNavigator from './AppNavigator';

const Navigator = () => {
  const [isWelcome, setIsWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsWelcome(false);
    }, 3000);
  }, [isWelcome]);
  return (
    <NavigationContainer>
      {isWelcome ? <WelcomeScreen /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
