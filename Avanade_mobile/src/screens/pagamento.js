import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';

export default class Pagamento extends Component {
    render() {
        return (
            <View style={styles.main}>

                <View style={styles.mainCard}>
                    <Text style={styles.mainTitulo}>Realizar pagamento</Text>
                    <View style={styles.mainCardDiv}>
                        <View style={styles.boxTexto}>
                            <Text style={styles.boxTextoTitulo}>Bike Runners - Park Shop </Text>

                            <View style={styles.mainCardLinha}>
                                <Text style={styles.boxTextoInfos}>25 minutos parado</Text>
                                <Text style={styles.boxTextoInfos}>R$25,00</Text>
                            </View>

                            <Text style={styles.boxTextoInfos}>R. Emília Marengo, 320 - Tatuape, São Paulo</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainPagamento}>
                    <Text>Realizar Pagamento</Text>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#676A69',
    },

    mainTitulo: {
        color: '#000000',
        fontSize: 30,
        paddingTop: 5,
        paddingBottom: 10
    },

    mainCard: {
        flex: 0.50,
        width: 411,
        backgroundColor: '#84849C',
        alignItems: 'center',
        justifyContent: 'center'
    },

    mainCardDiv: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        height: 223,
        width: 319,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxTexto: {
        width: 290,
        height: 194,
        justifyContent: 'space-between'
    },

    boxTextoTitulo: {
        fontSize: 25,
        color: '#000000'
    },

    boxTextoInfos: {
        fontSize: 20,
        color: '#000000'

    },

    mainCardLinha: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-between',
    },

    mainPagamento: {
        flex: 0.60,
        backgroundColor: 'black'
    }
});