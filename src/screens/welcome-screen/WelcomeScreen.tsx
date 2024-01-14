import { SafeAreaView, ImageBackground, Image} from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('@/assets/images/welcome.png')}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('@/assets/images/logo.png')} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
