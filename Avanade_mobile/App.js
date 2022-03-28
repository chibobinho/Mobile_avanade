import 'react-native-gesture-handler';

import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StatusBar, StyleSheet} from 'react-native';

import Main from './src/screens/main';
import Login from './src/screens/login';
import TrocaPontos from './src/screens/trocaPontos';
import TutorialDestrava from './src/screens/tutorialDestrava';
import TutorialTrava from './src/screens/tutorialTrava';
import Vaga from './src/screens/vaga';

const AuthStack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar
          hidden={true}
        />
        <AuthStack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <AuthStack.Screen name="Login" component={Login} />
          <AuthStack.Screen name="TrocaPontos" component={TrocaPontos} />
          <AuthStack.Screen name="TutorialTrava" component={TutorialTrava} />
          <AuthStack.Screen name="TutorialDestrava" component={TutorialDestrava} />
          <AuthStack.Screen name="Vaga" component={Vaga} />
          <AuthStack.Screen name="Main" component={Main} />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#3912A9',
  },

  // estilo dos ícones da tabBar
  tabBarIcon: {
    width: 22,
    height: 22,
  },
});

export default App;