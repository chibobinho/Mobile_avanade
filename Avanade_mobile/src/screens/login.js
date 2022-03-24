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

  render() {
    return (
      <View style={styles.main}>
        <Image style={styles.imgPonto} source={require('../../assets/img/mapa.png')} />

        <View style={styles.espacoTitulo}>
          <Text style={styles.tituloBicicletario}>Bike Runners - Bike Shop</Text>
        </View>

        <View style={styles.infoBicicletario}>
          <View>
            <Text style={styles.tituloInfo}>Endereço:</Text>
            <Text style={styles.textoInfo}>R. Emília Marengo, 320 - Tatuape, São Paulo - SP, 03336-000</Text>
          </View>

          <View>
            <Text style={styles.tituloInfo}>Áreas atendidas</Text>
            <Text style={styles.textoInfo}>São Paulo</Text>
          </View>

          <View>
            <Text style={styles.tituloInfo}>Horas</Text>
            <Text style={styles.textoInfo}>Aberto ⋅ Fecha às 19:00</Text>
          </View>

          <View>
            <Text style={styles.tituloInfo}>Vagas</Text>
            <Text style={styles.textoInfo}>
              Disponiveis = 7
              Totais = 15
            </Text>
          </View>

          <View style={styles.btnPosicionamento}>
            <TouchableOpacity style={styles.btnPonto}>
              <Text style={styles.cardPontosText}>Estou no ponto</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 2,
    backgroundColor: '#CECED7',
  },

  imgPonto: {
    height: 250,
  },

  espacoTitulo: {
    height: 103,
    borderRadius: 5,
    /* shadowColor: '#000',
    shadowOpacity: 'rgba(0, 0, 0, 0.4)', */
    alignItems: 'center',
    justifyContent: 'center',
  },

  tituloBicicletario: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },

  infoBicicletario: {
    paddingLeft: 38,
  },

  tituloInfo: {
    fontSize: 25,
    color: '#000',
  },

  textoInfo: {

  },

  btnPosicionamento: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnPonto: {
    backgroundColor: '#F3BC2C',
    width: 157,
    height: 60,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardPontosText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Login;