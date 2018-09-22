import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Entypo } from '@expo/vector-icons';

import SideMenu from './SideMenu';
import AuthLoadingScreen from './AuthLoadingScreen';
import WelcomeScreen from './welcome/WelcomeScreen';
import HomeScreen from './home/HomeScreen';

import ButtonHeader from '../components/ButtonHeader';
import { colors } from '../constants';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: (
        <ButtonHeader side="left" onPress={() => navigation.openDrawer()}>
          <Entypo name="menu" size={30} color={colors.white} />
        </ButtonHeader>
      ),

      headerStyle: {
        backgroundColor: colors.purple,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: 'black',
    }),
  },
);

const AuthStack = createStackNavigator(
  {
    Welcome: { screen: WelcomeScreen },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: () => ({
      headerStyle: {
        backgroundColor: colors.white,
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTintColor: 'black',
    }),
  },
);

const AppStack = createDrawerNavigator(
  {
    Home: { screen: HomeStack },
  },
  {
    drawerOpenRoute: 'LeftSideMenu',
    contentComponent() {
      return <SideMenu />;
    },
  },
);

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);
