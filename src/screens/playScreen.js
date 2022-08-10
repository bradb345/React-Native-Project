import React, { Component } from 'react'
import { StyleSheet, Text, } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Header from '../atoms/Header';
import MainCard from '../atoms/MainCard';


class PlayScreen extends Component {
  render() {

    const p = this.props

    const styles = StyleSheet.create({
      container: {
        padding: theme.padXM,

      },

    })
    return (
      <>
        <Header {...p}/>

        <V center style={styles.container}>
          <Icon touchable ionicons name="heart-outline" press={() => p.navigation.goBack()} />
          <T white large> Play screen bitches </T>
          <MainCard/>
        </V>
      </>
    )
  }
}

export default PlayScreen