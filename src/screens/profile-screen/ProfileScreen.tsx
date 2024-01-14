import {
  View,
  SafeAreaView,
  TouchableOpacity,
  useColorScheme,
  ColorSchemeName,
} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import DarkMode from '@/utils/darkMode.context';
import {Card, Text} from '@/utils/Theme';

const ProfileScreen = () => {
  const {isDarkMode, setIsDarkMode, useDeviceSettings, setUseDeviceSettings} =
    useContext(DarkMode);
  const currentActivatedTheme: ColorSchemeName = isDarkMode ? 'dark' : 'light';
  const scheme = useColorScheme();
  const toggleDarkModeDevice = useCallback(() => {
    setUseDeviceSettings(!useDeviceSettings);
    if (scheme === 'dark') {
      setIsDarkMode(true);
      return;
    }
    setIsDarkMode(false);
    console.log(isDarkMode);
  }, [useDeviceSettings]);
  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode]);
  useEffect(() => {
    if (currentActivatedTheme !== scheme) {
      setUseDeviceSettings(false);
    }
  }, [isDarkMode, useDeviceSettings]);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1}}>
          <Text isDarkMode={isDarkMode}>Dark Mode</Text>
        </View>
        <TouchableOpacity hitSlop={20} onPress={toggleDarkMode}>
          <Text isDarkMode={isDarkMode}>{isDarkMode ? 'Off' : 'On'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', padding: 10}}>
        <View style={{flex: 1}}>
          <Text isDarkMode={isDarkMode}>Dark Mode Device</Text>
        </View>
        <TouchableOpacity hitSlop={20} onPress={toggleDarkModeDevice}>
          <Text isDarkMode={isDarkMode}>
            {useDeviceSettings ? 'Off' : 'On'}
          </Text>
        </TouchableOpacity>
      </View>
      <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}
      >
        <Card
        isDarkMode={isDarkMode}
          style={{
            width: 100,
            height: 100,
            justifyContent:'center',
            alignItems:'center'
          }}>
          <Text>Longmg</Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
