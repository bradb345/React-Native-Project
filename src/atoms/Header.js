import React, { Component } from "react"
import { theme } from "../helpers"
import V from '../atoms/V'
import T from "./T"
import Row from '../atoms/Row'

import Ionicons from "react-native-vector-icons/Ionicons"


export default class Header extends Component {
  render() {
    const p = this.props

    const styles = {
      header: {
        backgroundColor: theme.darkGrey,
        height: 40,
        paddingLeft: theme.padXM,
        paddingRight: theme.padXM,
        justifyContent: 'space-between'
      }
    }

    return (
      <Row left style={styles.header}>
        <Row style={{
          flex: 2
        }}>
          <T white >
            Audiobook Player
          </T>
        </Row>
        <Row style={{
          flex: 0.5,
          justifyContent: 'space-between'
        }}>
          <Ionicons name="heart-outline" size={20} color="#fff" />
          <Ionicons name="heart-outline" size={20} color="#fff" />
          <Ionicons name="heart-outline" size={20} color="#fff" />
        </Row>
      </Row>
    )
  }
}