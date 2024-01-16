import {Text, StyleProp, TextStyle} from 'react-native';
import React, { useContext } from 'react';
import {fontFamilies} from '@/constants/fontFamilies';
import {globalStyle} from '@/styles/globalStyle';
import DarkMode from '@/utils/darkMode.context';
import { darkMode, lightMode } from '@/utils/colors';

interface Props {
  text: string;
  color?: string;
  size?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?:boolean
}

const TextComponent = (props: Props) => {
  const {text, size, flex, font, color, styles,title} = props;
  const {isDarkMode} = useContext(DarkMode)
  return (
    <Text
      style={[
        globalStyle.text,
        {
          color: color ?? isDarkMode? darkMode.textWhite:lightMode.text,
          flex: flex ?? 0,
          fontSize: size ?? title ? 24 : 14,
          fontFamily: font ?? title ?fontFamilies.bold: fontFamilies.regular,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
