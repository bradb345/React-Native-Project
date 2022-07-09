import React, { Component } from 'react'
import { StyleSheet, Text, } from 'react-native';
import V from '../atoms/V';
import T from '../atoms/T';

class WelcomeScreen extends Component {
  render() {
    return (
      
      <V center >
        <T white medium> hello world </T>
      </V>
    )
  }
}

export default WelcomeScreen