import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

export default class TutorialTrava extends Component {
    realizarPagamento = () => {
        this.props.navigation.navigate('Mapa');
    }

    render() {
        return (
            <View style={styles.main}>
                <Text>Realizar Pagamento</Text>


                <View style={styles.mainPagamento}>
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
                    {/* <View style={styles.mainSpaceTitle}>
                        <Text style={styles.mainPagamentoText}>Siga essas instruções</Text>
                    </View>

                    <View style={styles.passoInfo}>
                        <View style={styles.mainPagamentoCircle}>
                            <Text style={styles.mainPagamentoText}>1°</Text>
                        </View>
                        <Text style={styles.mainPagamentoText}>Copie o código pix acima</Text>
                    </View>

                    <View style={styles.passoInfo}>
                        <View style={styles.mainPagamentoCircle}>
                            <Text style={styles.mainPagamentoText}>2°</Text>
                        </View>
                        <Text style={styles.mainPagamentoText}>Acesse o app do seu banco de preferencia</Text>
                    </View>

                    <View style={styles.passoInfo}>
                        <View style={styles.mainPagamentoCircle}>
                            <Text style={styles.mainPagamentoText}>3°</Text>
                        </View>
                        <Text style={styles.mainPagamentoText}>Escolher pagar com o Pix, cole o código e finalize o pagamento</Text>
                    </View>

                    <View style={styles.passoInfo}>
                        <View style={styles.mainPagamentoCircle}>
                            <Text style={styles.mainPagamentoText}>4°</Text>
                        </View>
                        <Text style={styles.mainPagamentoText}>Seu pagamento será aprovado em alguns segundos</Text>
                    </View>

                    <View style={styles.alinhamentoBtn}>
                        <TouchableOpacity style={styles.mainPagamentoBtn} onPress={this.realizarPagamento}>
                            <Text style={styles.pagamentoBtnText}>OK</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },

    mainCard: {
        flex: 0.5
    },

    mainPagamento: {
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
    },

    /* mainPagamento: {
        flex: 0.6,
        backgroundColor: '#676A69',
        justifyContent: 'space-evenly',
        paddingBottom: '5%',
        paddingRight: '10%',
        paddingLeft: '10%',
    },

    mainSpaceTitle: {
        alignItems: 'center',
    },

    passoInfo: {
        flexDirection: 'row',
    },

    mainPagamentoCircle: {
        width: 29,
        height: 29,
        borderRadius: 29 / 2,
        backgroundColor: '#AC9041',
        alignItems: 'center',
        marginRight: 10,
    },

    mainPagamentoText: {
        //fontFamily:
        fontSize: 20,
        color: '#fff',
    },

    alinhamentoBtn: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainPagamentoBtn: {
        width: 327,
        height: 60,
        backgroundColor: '#F3BC2C',
        alignItems: 'center',
        justifyContent: 'center',
    },

    pagamentoBtnText: {
        //fontFamily:
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    }, */
});