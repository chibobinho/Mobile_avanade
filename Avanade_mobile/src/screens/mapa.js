import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export default class Mapa extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainMapa}>

        </View>

        <View style={styles.mainNavegar}>
          <View style={styles.mainMenuNavegar}>
            <View style={styles.mainDividir}>
              <TextInput style={styles.mainMenuInput}>Para onde? <Image source={require('../../assets/img/Icone_lupa.png')} style={styles.mainImagem} /> </TextInput>
            </View>
          </View>
        </View>

      </View >
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 5,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 34,
    /* fontFamily: 'Open Sans', */
    fontWeight: 'bold',
    lineHeight: 39,
  },

  selecaoVaga: {
    backgroundColor: '#fff',
    borderColor: '#F3BC2C',
    borderWidth: 3,
    borderRadius: 16,
    width: 242,
    height: 122,
    alignItems: 'center',
    justifyContent: 'center',
  },

  numeroVaga: {
    fontSize: 36,
    /* fontFamily: 'Open Sans', */
  },

  btnConfirmar: {
    backgroundColor: '#F3BC2C',
    width: 157,
    height: 60,
    flex: 1,
    backgroundColor: '#ffffff',
  },

  mainMapa: {
    flex: 0.85,
    width: 411,
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: '#ffffff',
    borderColor: '#000000',
  },

  mainNavegar: {
    flex: 0.15,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainMenuNavegar: {
    width: 394,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#F3BC2C',
  },

  mainDividir: {
    width: 394,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainMenuInput: {
    width: 320,
    height: 30,
    paddingLeft: 23,
    paddingTop: 0,
    fontSize: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
    backgroundColor: '#ffffff',
  },

  mainImagem: {
    width: 20,
    height: 20,
  },

  btnConfirmarTexto: {
    /* fontFamily: 'Open Sans', */
    fontWeight: 'bold',
    fontSize: 24,
  },

  mainBodyImg: {
    width: 231,
    height: 168,
  },
});