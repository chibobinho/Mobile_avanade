import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, StatusBar, ScrollView, TouchableOpacity } from 'react-native';

export default class TutorialTrava extends Component {
    realizarPagamento = () => {
        this.props.navigation.navigate('Mapa');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.mainTitulo}>Realizar pagamento</Text>
                <View style={styles.mainCard}>
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
                    <Text style={styles.mainPagamentoTitle}>Método de Pagamento</Text>

                    <View style={styles.mainBtns}>
                        <TouchableOpacity style={styles.mainBtnPagamento} onPress={this.PagarPix}>
                            <Text style={styles.boxTextoInfos}>Pix</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.mainBtnPagamento} onPress={this.PagarDebito}>
                            <Text style={styles.boxTextoInfos}>Débito</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <View style={styles.mainPagamento}>
                    <Text style={styles.mainPagamentoTitle}>Cadastre seus Dados</Text>

                    <View style={styles.mainFormSpace}>
                        <TextInput style={styles.mainInput} placeholder='Numero do cartão' placeholderTextColor='#000000'></TextInput>
                        <View style={styles.mainTwoInput}>
                            <TextInput style={styles.mainInputSmall} placeholder='Validade' placeholderTextColor='#000000'></TextInput>
                            <TextInput style={styles.mainInputSmall} placeholder='CVV' placeholderTextColor='#000000'></TextInput>
                        </View>
                        <TextInput style={styles.mainInput} placeholder='Nome do cartão' placeholderTextColor='#000000'></TextInput>
                        <TouchableOpacity style={styles.mainBtn} onPress={this.realizarPagamento}>
                            <Text style={styles.mainBtnTexto}>Pagar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
 */}
            </View>

        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'background: rgba(132, 132, 156, 0.4)'
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
        alignItems: 'center',
        justifyContent: 'center',
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
        //fontFamily:
        fontSize: 25,
        color: '#000000'
    },

    boxTextoInfos: {
        //fontFamily:
        fontSize: 20,
        color: '#000000'
    },

    mainCardLinha: {
        flexDirection: 'row',
        width: 280,
        justifyContent: 'space-between',
    },

    mainCard: {
        flex: 0.5,
        backgroundColor: '#ffffff',
    },

    mainPagamento: {
        flex: 0.6,
        backgroundColor: '#ffffff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    mainPagamentoTitle: {
        //fontFamily:
        fontSize: 30,
        color: '#000',
    },

    mainBtns: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly'
    },

    mainBtnPagamento: {
        height: 37,
        width: 116,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#FAD364',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },


    /* mainPagamento: {
        flex: 0.6,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    mainPagamentoTitle: {
        //fontFamily:
        fontSize: 25,
        color: '#000',
    },

    mainFormSpace: {
        marginTop: 25,
        height: 400,
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
        paddingLeft: '5%',
    },

    mainTwoInput: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mainInputSmall: {
        width: 110,
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
        //fontFamily: '',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000000',
    }, */
});