import React, { Component } from 'react';
import { StyleSheet, Text, View, Select, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Mapa extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainMapa}>
          
        </View>

        <View style={styles.mainNavegar}>
          <View style={styles.mainMenuNavegar}>
            <TextInput style={styles.mainMenuInput}>Para onde? <Image source={require('../../assets/img/Icone_lupa.png')} style={styles.mainImagem} /> </TextInput>
            </View>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  mainMapa: {
    flex: 0.85,
    backgroundColor: 'aquamarine',
    width: 411,
    borderRadius: 5,
  },

  mainNavegar: {
    flex: 0.15,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainMenuNavegar: {
    width: 394,
    height: 60,
    backgroundColor: '#F3BC2C',
    borderRadius: 5,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  mainMenuInput: {
    width: 320,
    height: 30,
    backgroundColor: '#ffffff',
    fontSize: 12,
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:
    paddingLeft: 23,
    paddingTop: 0,
    marginTop: 0,
  },

  mainImagem: {
    width: 20,
    height: 20,
  },
});