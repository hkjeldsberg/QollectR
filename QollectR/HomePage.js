/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, ImageBackground, AppRegistry,  TouchableOpacity,Linking, Platform, Alert, StyleSheet, Text, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import MenuPage from './MenuPage';
import { createStackNavigator } from 'react-navigation';

type Props = {};

export default class HomePage extends Component<{}> {
  static navigationOptions = {
      header: null,
      footer: null,
      borderBottomWidth:0
  };

  constructor() {
    super();

    this.state = {
      showMenu: false
    };
  }

  onTapImage(e) {
    console.log("Tapped on an image");
    console.log(this.props);
   Linking
     .openURL(e.data)
     .catch(err => console.error('An error occured', err));
  }

  onButtonPress(e){
    Alert.alert("Du tæppet knappen!");
  }

  render() {
      const { navigate } = this.props.navigation;
      return (
        <View style={styles.container}>
  <ImageBackground
    source={require('./gradgr.png')}
    style={styles.image}>
      <Text
        onPress={() => navigate('QR')}
        style={styles.paragraph}>
        LOGIN
        </Text>
    </ImageBackground>
    </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    image: {
      flexGrow:1,
      height:null,
      width:null,
      alignItems: 'center',
      justifyContent:'center',
    },
    paragraph: {
      color: 'white',
      fontSize: 40,
      fontWeight:  '400',
      textAlign: 'center',
    },
  centerText: {
    flex: 1,
    fontSize: 23,
    color: '#777',
    alignItems: 'center'
  },
  textBold: {
    fontWeight: '700',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: '#000',
    backgroundColor: 'rgb(88, 185, 164)',
    width: 200,
    height: 70,
    borderRadius: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonTouchable: {
  },
});
//AppRegistry.registerComponent('default', () => App);
