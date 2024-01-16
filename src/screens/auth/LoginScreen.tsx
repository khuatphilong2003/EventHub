import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const handleLogin = useCallback(async () => {
    await AsyncStorage.setItem('assetToken', 'l;akdsfa;lkfa;lfka;');
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: 'red',
          padding: 10,
          width: 100,
          alignItems: 'center',
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
