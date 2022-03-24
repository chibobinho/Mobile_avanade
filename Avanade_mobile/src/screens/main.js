import React, { Component } from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();

import Mapa from './mapa';
import Perfil from './perfil';

class Main extends Component {

  render(){
    return (
      <View style={styles.main}>
        <StatusBar 
          hidden={false}
        />

          <bottomTab.Navigator
            initialRouteName='Mapa'
            
            screenOptions={ ({ route }) => ({
              tabBarIcon: () => {
                if (route.name === 'Mapa') {
                  return(
                    <Image
                      style={styles.tabBarIcon}
                      source={require('../../assets/img/icon_mapa.png')}
                    />
                  )
                }
                if (route.name === 'Perfil') {
                  return(
                    <Image
                      style={styles.tabBarIcon}
                      source={require('../../assets/img/icon_perfil.png')}
                    />
                  )
                }
              },

              // React Navigation 6.x
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveBackgroundColor: '#F3BC2C',
              tabBarInactiveBackgroundColor: '#F3BC2C',
              // tabBarActiveTintColor: 'blue',
              // tabBarInactiveTintColor: 'red',
               tabBarStyle: { 
                height: 78, 
                borderTopWidth: 0,}         
            }) }
          >
            <bottomTab.Screen name="Mapa" component={Mapa} />
            <bottomTab.Screen name="Perfil" component={Perfil} />
          </bottomTab.Navigator>        

      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    //backgroundColor: '#3912A9',
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 40,
    height: 40
  }

});

export default Main;