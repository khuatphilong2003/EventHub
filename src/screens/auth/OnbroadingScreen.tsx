import {View, Image, TouchableOpacity} from 'react-native';
import React, {useCallback, useState} from 'react';
import {globalStyle} from '@/styles/globalStyle';
import Swiper from 'react-native-swiper';
import {appInfo} from '@/constants/appInfo';
import {appColors} from '@/constants/appColors';
import {useNavigation} from '@react-navigation/native';
import {AuthStackNavigationType} from '@/navigators/type';
import TextComponents from '@/components/TextComponent';
import { fontFamilies } from '@/constants/fontFamilies';

const OnbroadingScreen = () => {
  const [index, setIndex] = useState<number>(0);
  const navigation =
    useNavigation<AuthStackNavigationType<'OnbroadingScreen'>>();
  const handleNavigation = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);
  const handleIndex = useCallback((num: number) => {
    setIndex(num);
  }, []);
  const handleNextIndex = useCallback(() => {
    index < 2 ? setIndex(index + 1) : handleNavigation();
  }, [index, handleNavigation]);

  return (
    <View style={[globalStyle.container]}>
      <Swiper
        loop={false}
        onIndexChanged={num => handleIndex(num)}
        index={index}
        activeDotColor={appColors.white}>
        <Image
          source={require('@/assets/images/welcome1.png')}
          style={{
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
          }}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/welcome2.png')}
          style={{
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
          }}
          resizeMode="cover"
        />
        <Image
          source={require('@/assets/images/welcome3.png')}
          style={{
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
          }}
          resizeMode="cover"
        />
      </Swiper>
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        <TouchableOpacity hitSlop={20} onPress={handleNavigation}>
          <TextComponents text="Skip" color="white" font={fontFamilies.semiBold}/>
        </TouchableOpacity>
        <TouchableOpacity hitSlop={20} onPress={handleNextIndex}>
          <TextComponents text="Next" color="white" font={fontFamilies.semiBold}/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;
