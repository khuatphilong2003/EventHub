import React, { useEffect, useState } from 'react';
import Navigator from '@/navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import DarkMode from '@/utils/darkMode.context';
import { Appearance, useColorScheme } from 'react-native';


const App = () => {
  const [isDarkMode,setIsDarkMode] = useState<boolean>(false);
  const [useDeviceSettings,setUseDeviceSettings] = useState<boolean>(false)
  const scheme = useColorScheme()
  useEffect(() => {
    let subscription: any;

    if (useDeviceSettings) {
      subscription = Appearance.addChangeListener((scheme) => {
        // Is dark mode will be true when scheme.colorScheme is equal to 'dark'
        setIsDarkMode(scheme.colorScheme === 'dark');
      });
    }

    // cleanup
    return () => {
      if (subscription) {
        subscription.remove();
        subscription = null;
      }
    };
  }, [scheme, isDarkMode, useDeviceSettings]);
  return (
    <DarkMode.Provider

    value={{
      isDarkMode,setIsDarkMode,useDeviceSettings,setUseDeviceSettings}}
      
    >
      <SafeAreaProvider style={{flex: 1}}>
        <GestureHandlerRootView style={{flex: 1}}>
          <Navigator isDarkMode={isDarkMode}/>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </DarkMode.Provider>
  );
};

export default App;
