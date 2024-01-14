import WelcomeScreen from '@/screens/welcome-screen/WelcomeScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import HomeScreen from '@/screens/home-screen/HomeScreen';
import EventScreen from '@/screens/event-screen/EventScreen';
import MapScreen from '@/screens/map-screen/MapScreen';
import ProfileScreen from '@/screens/profile-screen/ProfileScreen';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export {
  HomeScreen,
  WelcomeScreen,
  LoginScreen,
  EventScreen,
  MapScreen,
  ProfileScreen,
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  RessetPasswordScreen: undefined;
  VerificationScreen: undefined;
  SigninScreen: undefined;
};

export type RootBottomStackParamList = {
  HomeScreen: undefined;
  EventScreen: undefined;
  MapScreen: undefined;
  ProfileScreen: undefined;
};

export type AppStackParamList = {
    'Root':NavigatorScreenParams<RootBottomStackParamList>
}

export type RootStackParamList = {
    AuthStack : NavigatorScreenParams<AuthStackParamList>
    RootStack : NavigatorScreenParams<RootBottomStackParamList>
}

declare global{
    namespace ReactNavigation{
        interface RootParamList extends RootStackParamList{}
    }
 }

 export type AuthStackNavigationType<RouteName extends keyof AuthStackParamList>=
 CompositeNavigationProp<
 NativeStackNavigationProp<AuthStackParamList,RouteName>,
 NativeStackNavigationProp<AppStackParamList,'Root'>
 >