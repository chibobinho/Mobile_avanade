import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default class TutorialTrava extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Text>Realizar Pagamento</Text>
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
});  