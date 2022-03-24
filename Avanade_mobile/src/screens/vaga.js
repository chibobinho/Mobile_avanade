import React, { Component } from 'react';
import { StyleSheet, Text, View, Select, Image, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.main}>
        <View>
          <Text style={styles.titulo}>Qual vaga você está usando?</Text>
        </View>
        <Image source={require('../../assets/img/logo')}
          style={styles.mainBodyImg}
        />
        <View style={styles.selecaoVaga}>
          <Text style={styles.numeroVaga}>1</Text>
        </View>
        {/* <View>
         <Select></Select>
       </View> */}

        <TouchableOpacity style={styles.btnConfirmar}>
          <Text style={styles.btnConfirmarTexto}>Confirmar</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
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