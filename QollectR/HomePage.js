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
import { createStackNavigator } from 'react-navigation';

type Props = {};


export default class HomePage extends Component<{}> {
  static navigationOptions = {
      title: 'Velkommen til QollectR',
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
      <QRCodeScanner
        onRead={this.onTapImage.bind(this)}
        reactivate={true}
        reactivateTimeout={5000}
        topContent={
          <Text style={styles.centerText}>
            Skann en vilkårlig <Text style={styles.textBold}>QR-kode</Text>.
          </Text>
        }
        bottomContent={
          <TouchableOpacity onPress={() => navigate('Menu')} style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Detaljer om appen</Text>
          </TouchableOpacity>
        }
      />
      );
    }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 23,
    padding: 36,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: '#000',
    backgroundColor: 'rgb(88, 185, 164)',
    width: 240,
    height: 50,
    borderRadius: 2,
    textAlign: 'center',
    padding: 10
  },
  buttonTouchable: {
    padding: 16,
  },
});
//AppRegistry.registerComponent('default', () => App);
