import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import { theme } from "../helpers"

import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export default class Icon extends Component {
  render() {
    const p = this.props

    const styles = {
      icon: {
        fontSize: 20,
        color: "#fff"
      }
    }

    return (
      <>
        {p.touchable ?
          <TouchableOpacity {...p} onpress={undefined}>
            {p.ionicons && <Ionicons {...p} name={p.name || "heart-outline"} style={{ ...styles.icon, ...p.style }} />}
            {p.materialicons && <MaterialIcons {...p} name={p.name || "star-rate"} style={{ ...styles.icon, ...p.style }} />}
          </TouchableOpacity>
          :
          <>
            {p.ionicons && <Ionicons {...p} name={p.name || "heart-outline"} style={{ ...styles.icon, ...p.style }} />}
            {p.materialicons && <MaterialIcons {...p} name={p.name || "star-rate"} style={{ ...styles.icon, ...p.style }} />}
          </>
        }
      </>

    )
  }
}