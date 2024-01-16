import React, {useCallback, useEffect, useState} from 'react';
import {WelcomeScreen} from './type';
import AppNavigator from './AppNavigator';
import {
  Theme,
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {darkMode} from '@/utils/colors';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import AuthNavigator from './AuthNavigator';

interface DataProps {
  isDarkMode: boolean;
}

const Navigator: React.FC<DataProps> = ({isDarkMode}) => {
  const [isShowWelcome, setIsShowWelcome] = useState<boolean>(true);
  const [accessToken, setAccessToken] = useState('');
  const {getItem, setItem} = useAsyncStorage('assetToken');
  // Create custom dark theme
  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
      background: darkMode.main,
      card: darkMode.main,
    },
  };
  

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(()=>{
    checkLogin();
  },[])



  const checkLogin = useCallback(async()=>{
      const token = await getItem()
      console.log(token);

      token && setAccessToken(token)
      
  },[])

  return (
    <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme}>
      {isShowWelcome ? <WelcomeScreen /> : accessToken? <AppNavigator />:<AuthNavigator/>}
    </NavigationContainer>
  );
};

export default Navigator;
