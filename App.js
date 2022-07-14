import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from './src/helpers/theme'


import Container from './src/molecules/Container';


class App extends Component {
  render() {
    return (
      <NavigationContainer theme={{colors:{
        background: theme.dark
      }}}>
        <PaperProvider>
          <Container />
        </PaperProvider>
      </NavigationContainer>
    )
  }
}

export default App