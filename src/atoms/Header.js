import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
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

    const onPress = ()=>{
      console.log("ouch, dont touch me")
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
          <Icon touchable ionicons name="folder-outline" style={{marginRight:20}} press={onPress}/>
          <Icon touchable ionicons name="list-outline" style={{marginRight:20}}/>
          <Icon touchable ionicons name="settings-outline" style={{marginLeft:0}}/>
        </Row>
      </Row>
      
    )
  }
}