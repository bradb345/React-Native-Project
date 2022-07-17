import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native'
import Header from '../atoms/Header'
import HomeScreen from '../screens/HomeScreen'
import PlayScreen from '../screens/PlayScreen'
import { theme } from '../helpers'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class Container extends Component {

  render() {
    const p = this.props

    const Stack = createNativeStackNavigator();

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        // padding: theme.padXM,
        backgroundColor: theme.dark,
      },

    })

    return (
      <SafeAreaView style={styles.container} >
        {/* <Header /> */}
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen}/>
          <Stack.Screen name="PlayScreen" component={PlayScreen} />
        </Stack.Navigator>

      </SafeAreaView>
    )
  }
}
