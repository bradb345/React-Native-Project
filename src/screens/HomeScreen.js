import React, { Component } from 'react'
import { StyleSheet, Text, } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Header from '../atoms/Header';
import Tile from '../atoms/Tile';


class HomeScreen extends Component {
  render() {

    const p = this.props

    const styles = StyleSheet.create({
      container: {
        padding: theme.padXM,
        // flex: 1
      },

    })
    return (
      <>
        <Header />

        <V style={styles.container}>
          <V style={{
            marginBottom: 20,
            }}>
            <T white> Started </T>
          </V>
          <V style={{
            // marginBottom: 20
          }}>
            <Tile press={() => p.navigation.navigate("PlayScreen")}/>
            <Tile press={() => p.navigation.navigate("PlayScreen")}/>
          </V>
        </V>
      </>
    )
  }
}

export default HomeScreen