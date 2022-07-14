import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Container from './src/molecules/Container';


class App extends Component {
  render() {
    return (
      <PaperProvider>
        <Container/>
      </PaperProvider>
    )
  }
}

export default App