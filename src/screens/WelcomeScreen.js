import React, { Component } from 'react'
import { StyleSheet, Text, } from 'react-native';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';

import Ionicons from 'react-native-vector-icons/Ionicons';

class WelcomeScreen extends Component {
  render() {
    return (
      
      <V center >
        <Ionicons name="heart-outline" size={40} color="#fff" />
        <T white medium> hello bitches </T>
      </V>
    )
  }
}

export default WelcomeScreen