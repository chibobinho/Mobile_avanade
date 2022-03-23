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
import './assets/img/icon.png'
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

          <Image source={require('')} style={styles.mainImagem} />
          <TextInput style={styles.mainInput}>Endereço de E-mail</TextInput>
          <TextInput style={styles.mainInput}>Senha</TextInput>
          <TouchableOpacity style={styles.mainBtn}>
                <Text style={styles.mainBtnTexto}>Logar</Text>
              </TouchableOpacity>
          <Text style={styles.mainTexto}>Esqueceu sua senha?</Text>
          <Text style={styles.mainTexto}>Não tem uma conta? Cadastre-se</Text>

        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: 'aquamarine',
    alignItems: 'center',
  },

  mainDiv: {
    flex: 0.8,
    backgroundColor: 'white',
    height: 517,
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  mainImagem: {
    width: 132,
    height: 96,
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

  mainTexto: {
    fontSize: 14,
    color: '#000000'
  },
});

export default App;
