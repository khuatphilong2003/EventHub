import {View, Text as DefaultText, TextProps,ViewProps} from 'react-native';
import React from 'react';
import { darkMode, lightMode } from './colors';

type ThemeProps = {
  isDarkMode?: boolean;
};
export function Text(props: TextProps & ThemeProps) {
  const {isDarkMode, style, ...rest} = props;
  return (
    <DefaultText
      style={[
        style,
        {
          color: isDarkMode ? 'white' : 'black',
        },
      ]}
      {...rest}
    />
  );
}

export function Card(props: ViewProps & ThemeProps) {
  const {isDarkMode, style, ...rest} = props;
  return (
    <View
      style={[
        style,
        {
          backgroundColor: isDarkMode ? lightMode.card : darkMode.card,
        },
      ]}{
        ...rest
      }
    />
  );
}
