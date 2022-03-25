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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //nome: '',
      Email: '',
      base64: '',
    };
  }

  realizarLogin = () => {
    this.props.navigation.navigate('Main');
  }

  realizarCadastro = () => {
    this.props.navigation.navigate('Cadastro');
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainDiv}>

          <View style={styles.mainImagemSpace}>
            <Image source={require('../../assets/img/icon.png')} style={styles.mainImagem}/>
          </View>
          <View style={styles.mainFormSpace}>
            <TextInput style={styles.mainInput} placeholder='Endereço de E-mail' placeholderTextColor='#000000'></TextInput>
            <TextInput style={styles.mainInput} placeholder='Senha' placeholderTextColor='#000000'></TextInput>

            <TouchableOpacity style={styles.mainBtn} onPress={this.realizarLogin}>
              <Text style={styles.mainBtnTexto}>Logar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mainTextoSpace}>

            <Text style={styles.mainTexto}>Esqueceu sua senha?</Text>
            <TouchableOpacity style={styles.mainBtnCadastro} onPress={this.realizarCadastro}>
            <Text style={styles.mainTexto}>Não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
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

  mainImagemSpace: {
    width: 260,
    height: 166,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainImagem: {
    marginTop: 20,
    width: 132,
    height: 96,
  },

  mainFormSpace: {
    height: 240,
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
    height: 91,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  mainTexto: {
    fontSize: 14,
    color: '#000000'
  },
});

export default Login;