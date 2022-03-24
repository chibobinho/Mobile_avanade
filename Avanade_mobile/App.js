<<<<<<< HEAD
import 'react-native-gesture-handler';

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';

import Main from './src/screens/main';
import Login from './src/screens/login';

const AuthStack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          hidden={true}
        />
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="Main" component={Main} />
        </AuthStack.Navigator>
      </NavigationContainer>
=======
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

import Icone from './assets/img/icon.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //nome: '',
      Email: '',
      base64: '',
    };
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainDiv}>

          <View style={styles.mainTituloSpace}>
            <Image style={styles.mainImagem} source={require('./assets/img/Icone_voltar.png')} />
            <Text style={styles.mainTitulo}>Cadastro</Text>
          </View>

          <View style={styles.mainFormSpace}>
            <TextInput style={styles.mainInput}>Nome Completo</TextInput>
            <TextInput style={styles.mainInput}>CPF</TextInput>
            <TextInput style={styles.mainInput}>Endereço de e-mail</TextInput>
            <TextInput style={styles.mainInput}>Senha</TextInput>
            <TextInput style={styles.mainInput}>DD/MM/AAAA</TextInput>
            <TouchableOpacity style={styles.mainBtn}>
              <Text style={styles.mainBtnTexto}>Cadastrar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainTextoSpace}>
            <Text style={styles.mainTexto}>Você será reencaminhado para a tela de login.</Text>
          </View>

        </View>
      </View >
>>>>>>> e66f842e7df2301961af03e483db6ee8dafca371
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#3912A9',
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22,
=======
    backgroundColor: '#ffffff',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },

  mainDiv: {
    flex: 0.9,
    backgroundColor: 'white',
    height: 517,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  mainTituloSpace: {
    width: 203,
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 55,
  },

  mainImagem: {
    marginTop: 15,
    width: 20,
    height: 20,
  },

  mainTitulo: {
    fontSize: 36,
    color: '#000000',
  },

  mainFormSpace: {
    marginTop: 25,
    height: 490,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainInput: {
    width: 260,
    height: 60,
    backgroundColor: '#ffffff',
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 5,
    borderStyle: 'solid',
    borderColor: '#F3BC2C',
    paddingLeft: 23,
  },

  mainBtn: {
    backgroundColor: '#F3BC2C',
    width: 157,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainBtnTexto: {
    fontSize: 14,
    color: '#000000'
  },

  mainTextoSpace: {
    marginTop: 20,
    height: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainTexto: {
    fontSize: 14,
    color: '#000000'
>>>>>>> e66f842e7df2301961af03e483db6ee8dafca371
  },
});

export default App;