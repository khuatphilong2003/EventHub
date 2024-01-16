import {StyleProp, ViewStyle, TextStyle, TouchableOpacity} from 'react-native';
import React, {ReactNode, useContext} from 'react';
import TextComponent from './TextComponent';
import {globalStyle} from '@/styles/globalStyle';
import {Card} from '@/utils/Theme';
import DarkMode from '@/utils/darkMode.context';

interface Props {
  icon?: ReactNode;
  text: string;
  type: boolean;
  color?: string;
  styles?: StyleProp<ViewStyle>;
  textColor?: string;
  textStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
  iconFlex?: 'right' | 'left';
}

const ButtonComponents = (props: Props) => {
  const {isDarkMode} = useContext(DarkMode);
  const {
    icon,
    text,
    onPress,
    type,
    color,
    styles,
    textColor,
    textStyles,
    iconFlex,
  } = props;
  return (
    <Card isDarkMode={isDarkMode} style={[globalStyle.bottom, {}, styles]}>
      <TouchableOpacity onPress={onPress}>
        {icon && iconFlex === 'left' && icon}
        <TextComponent text={text} color={textColor} styles={textStyles} />
        {icon && iconFlex === 'right' && icon}
      </TouchableOpacity>
    </Card>
  );
};

export default ButtonComponents;
