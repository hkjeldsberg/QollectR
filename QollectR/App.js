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

type Props = {};


export default class App extends Component<{}> {

  constructor() {
    super();

    this.state = {
      example: undefined
    };
  }


  onSuccess(e) {
   Linking
     .openURL(e.data)
     .catch(err => console.error('An error occured', err));
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
        //onRead={this.onSuccess.bind(this)}
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
          <TouchableOpacity onPress={this.onButtonPress.bind(this)} style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Jeg skjønner!</Text>
          </TouchableOpacity>
        }
      />
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

AppRegistry.registerComponent('default', () => App);
