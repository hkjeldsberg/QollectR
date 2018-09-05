/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MenuText from './MenuText'
import {AppRegistry,  TouchableOpacity,Linking, Platform, Alert, StyleSheet, Text, View} from 'react-native';

type Props = {};


export default class MenuPage extends React.Component {

  constructor() {
    super();
    console.log("INSIDE MENUPAGE")
    this.state = {
      example: undefined
    };
  }

  onTapImage(e) {
    console.log("Tapped on an image");
    console.log(this.props);
   Linking
     .openURL(e.data)
     .catch(err => console.error('An error occured', err));
  }

  onButtonPress(){
    Alert.alert("Du tæppet knappen!")
  }

  render() {
    return (
      <View style={styles.centerText}>
        <MenuText />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

//AppRegistry.registerComponent('default', () => App);
