import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import Header from '../atoms/Header'
import HomeScreen from '../screens/HomeScreen'
import { theme } from '../helpers'

export default class Container extends Component {
  render() {
    const p = this.props

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // padding: theme.padXM,
        backgroundColor: theme.dark,
      },

    })

    return (
      <SafeAreaView {...p} style={styles.container} >
        <Header/>
        <HomeScreen/>
      </SafeAreaView>
    ) 
  }
}
