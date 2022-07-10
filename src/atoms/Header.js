import React, { Component } from "react"
import { theme } from "../helpers"
import V from '../atoms/V'
import T from "./T"
import Row from '../atoms/Row'

import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from "../atoms/Icon"


export default class Header extends Component {
  render() {
    const p = this.props

    const styles = {
      header: {
        backgroundColor: theme.darkGrey,
        height: 60,
        paddingLeft: theme.padXM,
        paddingRight: theme.padXM,
        justifyContent: 'space-between'
      }
    }

    return (
      <Row left style={styles.header}>
        <Row style={{
          // flex: 2
        }}>
          <T white >
            Audiobook Player
          </T>
        </Row>
        <Row style={{
          
        }}>
          <Ionicons name="heart-outline" size={20} color="#fff" style={{marginRight:10}}/>
          <Ionicons name="heart-outline" size={20} color="#fff" style={{marginRight:10}}/>
          <Icon ionicons name="heart-dislike-outline" style={{marginRight:5}}/>
          <Ionicons name="heart-outline" size={20} color="#fff" />
        </Row>
      </Row>
      
    )
  }
}