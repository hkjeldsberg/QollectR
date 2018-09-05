/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry,  TouchableOpacity,Linking, Platform, Alert, StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import MenuPage from './MenuPage';
import HomePage from './HomePage';
import { createStackNavigator } from 'react-navigation';

type Props = {};

const App = createStackNavigator({
  Home: { screen: HomePage },
  Menu: { screen: MenuPage },
});

export default App;
//AppRegistry.registerComponent('default', () => App);
