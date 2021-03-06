import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import { theme } from '../helpers';
import V from './V';

export default class Container extends Component {
  render() {
    const p = this.props

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: theme.padXM,
        backgroundColor: theme.dark
      },
      view: {
        flex: 1,
        padding: theme.padXM,
      }
    })

    return (
      <SafeAreaView {...p} style={styles.container}>
        <View {...p} style={styles.view}>

        </View>
      </SafeAreaView>
    )
  }
}