import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

class Ponto extends Component {

  render() {
    return (
      <View style={styles.main}>
        <ImageBackground style={[styles.imgPonto]} source={require('../../assets/img/mapa.png')}>
          <Image style={styles.mainBtnVoltar} source={require('../../assets/img/Icone_voltar.png')} />
        </ImageBackground>

        <View style={styles.mainBody}>
          <View style={styles.espacoTitulo}>
            <Text style={styles.tituloBicicletario}>Bike Runners - Bike Shop</Text>
          </View>
          <View style={styles.infoBicicletario}>
            <View>
              <Text style={styles.tituloInfo}>Endereço:</Text>
              <Text style={styles.textoInfo}>R. Emília Marengo, 320 - Tatuape, São Paulo - SP, 03336-000</Text>
            </View>

            <View>
              <Text style={styles.tituloInfo}>Áreas atendidas:</Text>
              <Text style={styles.textoInfo}>São Paulo</Text>
            </View>

            <View>
              <Text style={styles.tituloInfo}>Horas:</Text>
              <Text style={styles.textoInfo}>Aberto ⋅ Fecha às 19:00</Text>
            </View>

            <View>
              <Text style={styles.tituloInfo}>Vagas:</Text>
              <Text style={styles.textoInfo}>Disponiveis = 7</Text>
              <Text style={styles.textoInfo}>Totais = 15</Text>
            </View>

            <View style={styles.btnPosicionamento}>
              <TouchableOpacity onPress={this.realizarLogin} style={styles.btnPonto}>
                <Text style={styles.cardPontosText}>Estou no ponto</Text>
              </TouchableOpacity>
            </View>
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
    backgroundColor: '#CECED7',
  },

  mainBtnVoltar: {
    width: 20,
    height: 20,
    marginLeft: 25,
    marginTop: 10
  },

  imgPonto: {
    height: 270,
  },

  mainBody: {
    flex: 1,
    justifyContent: 'space-between',
  },

  espacoTitulo: {
    height: 103,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },

  tituloBicicletario: {
    //fontFamily: '',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },

  infoBicicletario: {
    paddingLeft: 38,
    paddingRight: 38,
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: 10,
    paddingTop: 10,
  },

  tituloInfo: {
    //fontFamily: '',
    fontSize: 25,
    color: '#000',
  },

  textoInfo: {
    //fontFamily: '',
    fontSize: 18,
    color: '#000',
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
    //fontFamily: '',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});

export default Ponto;
