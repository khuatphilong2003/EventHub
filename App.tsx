import React from 'react';
import Navigator from '@/navigators';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Navigator />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

export default App;
