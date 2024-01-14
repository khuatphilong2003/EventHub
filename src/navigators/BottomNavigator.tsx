import React, {useCallback} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  EventScreen,
  HomeScreen,
  MapScreen,
  ProfileScreen,
  RootBottomStackParamList,
} from './type';
import {appColors} from '@/constants/appColors';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator<RootBottomStackParamList>();
const BottomNavigator = () => {
  const renderItemIcon = useCallback((focused: boolean, name: string) => {
    switch (name) {
      case 'explore':
        return (
          <Image
            source={require('@/assets/images/compass.png')}
            tintColor={focused ? appColors.primary : appColors.gray2}
          />
        );
      case 'event':
        return (
          <Image
            source={require('@/assets/images/Calendar.png')}
            tintColor={focused ? appColors.primary : appColors.gray2}
          />
        );
      case 'map':
        return (
          <Image
            source={require('@/assets/images/Location.png')}
            tintColor={focused ? appColors.primary : appColors.gray2}
          />
        );
      case 'profile':
        return (
          <Image
            source={require('@/assets/images/Profile.png')}
            tintColor={focused ? appColors.primary : appColors.gray2}
          />
        );
    }
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => renderItemIcon(focused, 'explore'),
        }}
      />
      <Tab.Screen
        name="EventScreen"
        component={EventScreen}
        options={{
          tabBarIcon: ({focused}) => renderItemIcon(focused, 'event'),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          tabBarIcon: ({focused}) => renderItemIcon(focused, 'map'),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => renderItemIcon(focused, 'profile'),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
