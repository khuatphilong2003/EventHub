import React, {useEffect, useState} from 'react';
import { WelcomeScreen } from './type';
import AppNavigator from './AppNavigator';
import { Theme, DarkTheme, DefaultTheme,NavigationContainer } from '@react-navigation/native';
import { darkMode } from '@/utils/colors';


interface DataProps{
  isDarkMode:boolean
}

const Navigator:React.FC<DataProps> = ({isDarkMode}) => {
  // Create custom dark theme
  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    dark:true,
    colors:{
      ...DarkTheme.colors,
      primary:'white',
      background:darkMode.main,
      card:darkMode.main
    }
  }

  const [isWelcome, setIsWelcome] = useState(true);
  useEffect(() => {  
    setTimeout(() => {
      setIsWelcome(false);
    }, 3000);
  }, [isWelcome]);
  return (
    <NavigationContainer theme={isDarkMode?CustomDarkTheme:DefaultTheme}>
      {isWelcome ? <WelcomeScreen /> : <AppNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
