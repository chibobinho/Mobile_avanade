import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class TrocaPontos extends Component {
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
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Text style={styles.mainHeaderText}>Trocar pontos</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>

        <View style={styles.mainBody}>

          <View style={styles.mainCards}>

            <View style={styles.cardPontos}>
              <View>
                <Text style={styles.cardPontosText}>15 pontos</Text>
                <Text style={styles.cardTextSaldo}>R$1,00</Text>
              </View>

              <TouchableOpacity style={styles.btnPontos}>
                <Text style={styles.cardPontosText}>Trocar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardPontos}>
              <View>
                <Text style={styles.cardPontosText}>15 pontos</Text>
                <Text style={styles.cardTextSaldo}>R$1,00</Text>
              </View>

              <TouchableOpacity style={styles.btnPontos}>
                <Text style={styles.cardPontosText}>Trocar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.cardPontos}>
              <View>
                <Text style={styles.cardPontosText}>15 pontos</Text>
                <Text style={styles.cardTextSaldo}>R$1,00</Text>
              </View>

              <TouchableOpacity style={styles.btnPontos}>
                <Text style={styles.cardPontosText}>Trocar</Text>
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
    backgroundColor: '#F7F7F7',
  },
  // cabeçalho
  mainHeader: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  mainHeaderRow: {
    flexDirection: 'row',
  },
  // texto do cabeçalho
  mainHeaderText: {
    fontSize: 36,
    color: 'rgba(51, 51, 51, 1)',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
  // linha de separação do cabeçalho
  mainHeaderLine: {
    width: 155,
    paddingTop: 12,
    borderBottomColor: 'rgba(0, 0, 0, 1)',
    borderBottomWidth: 1,
  },
  // conteúdo do body
  mainBody: {
    flex: 6,
    alignItems: 'center',
  },
  // informações do usuário
  mainCards: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#F3BC2C',
  },

  cardPontos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 300,
    height: 73,
    backgroundColor: '#FFF',
    borderColor: '#F3BC2C',
    borderWidth: 2,
  },

  cardPontosText: {
    fontSize: 20,
    fontFamily: 'Open Sans',
    color: '#000',
  },

  btnPontos: {
    backgroundColor: '#F3BC2C',
    width: 116,
    height: 37,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrocaPontos;