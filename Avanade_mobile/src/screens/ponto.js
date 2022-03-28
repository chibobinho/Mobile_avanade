import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

class Ponto extends Component {
  goBack = () => {
    this.props.navigation.goBack();
  }

  navegacaoVaga = () => {
    this.props.navigation.navigate('Vaga');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.main}>
          <ImageBackground style={styles.imgPonto} source={require('../../assets/img/mapa.png')}>
            <TouchableOpacity style={styles.mainBtnVoltar} onPress={this.goBack}>
              <Image style={styles.mainBtnVoltar} source={require('../../assets/img/Icone_voltar.png')} />
            </TouchableOpacity>

            <View style={styles.alinhamentoRetangulo}>
              <View style={styles.retanguloBicicletario} />
            </View>
          </ImageBackground>

          <View style={styles.mainBody}>
            <View style={styles.espacoTitulo}>
              <Text style={[styles.tituloBicicletario, styles.sombra]}>Bike Runners - Bike Shop</Text>
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
                <TouchableOpacity style={styles.btnPonto} onPress={this.navegacaoVaga}>
                  <Text style={styles.cardPontosText}>Estou no ponto</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#CECED7',
  },
  mainBtnVoltar: {
    width: 20,
    height: 20,
    marginLeft: 13,
    marginTop: 7,
  },
  imgPonto: {
    height: 279,
    width: '100%',
  },
  retanguloBicicletario: {
    width: 74,
    height: 7,
    backgroundColor: '#C4C4C4',
    borderColor: 'rgba(0, 0, 0, 0.6)',
    borderWidth: 1,
  },
  alinhamentoRetangulo: {
    alignItems: 'center',
    marginTop: '60%',
  },
  mainBody: {
    flex: 1,
    minHeight: 520,
    justifyContent: 'space-between',
  },
  espacoTitulo: {
    height: 103,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sombra: {
    shadowColor: '#rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  tituloBicicletario: {
    //fontFamily: '',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  },
  infoBicicletario: {
    paddingLeft: 38,
    paddingRight: 38,
    flex: 1,
    justifyContent: 'space-evenly',
    paddingBottom: 20,
    paddingTop: 20,
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
