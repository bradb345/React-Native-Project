import React, { Component } from 'react'
import { StyleSheet, Text, } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';


class HomeScreen extends Component {
  render() {

    const p = this.props

    const styles = StyleSheet.create({
      container: {
        padding: theme.padXM,

      },

    })
    return (

      <V center style={styles.container}>
        <Icon touchable press={() => p.navigation.navigate("PlayScreen")} ionicons name="heart-dislike-outline" />
        <T white large> hello bitches </T>
      </V>
    )
  }
}

export default HomeScreen