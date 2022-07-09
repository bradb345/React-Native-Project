import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Container from './src/atoms/Container';
import WelcomeScreen from './src/screens/WelcomeScreen';

class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Container>
          <WelcomeScreen />
        </Container>
      </PaperProvider>
    )
  }
}

export default App