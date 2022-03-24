import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

class Pontos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      base64: '',
    };
  }

  render() {
    return (
      <View style={styles.main}>
        {/* <Image source={require('../ProjetoAvanade/assets/img_ponto')}/> */}
        <Text style={styles.tituloBicicletario}>Bike Shop</Text>

        <View>
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
        </View>

        <TouchableOpacity style={styles.btnPonto}>
          <Text style={styles.cardPontosText}>Estou no ponto</Text>
        </TouchableOpacity>
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

  tituloBicicletario: {

  },

  tituloInfo: {
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: '#000',
  },

  textoInfo: {
    
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
    fontSize: 18,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Pontos;