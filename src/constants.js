import React from 'react';
import { Dimensions, StatusBar } from 'react-native';

export const TOKEN_KEY = '@BteksCompany';

export const { width } = Dimensions.get('window');

export const Statusbar = ({ color }) => (
  <StatusBar backgroundColor={colors.purple} barStyle={`${color}-content`} />
);

export const colors = {
  green: '#28d380',
  red: '#d2421a',
  purple: '#060619',
  purple2: '#18181e',
  purple3: '#27272b',
  blue: '#386ff4',
  white: '#ffffff',
  gray1: '#939ba1',
  gray2: '#6e777e',
  gray3: '#e8ebec',
  gray4: '#eef2f5',
  gray5: '#aab7d7',
  gray6: '#e6e8ed',
};
