import React, { Component } from 'react'
import { StyleSheet, Text, } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';

import Ionicons from 'react-native-vector-icons/Ionicons';

class WelcomeScreen extends Component {
  render() {

    const styles = StyleSheet.create({
      container: {
        padding: theme.padXM,

      },

    })
    return (

      <V center style={styles.container}>
        <Icon touchable ionicons name="heart-dislike-outline" />
        <T white large> hello bitches </T>
      </V>
    )
  }
}

export default WelcomeScreen