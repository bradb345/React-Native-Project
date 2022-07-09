import React, { Component } from "react"
import { View, StyleSheet } from "react-native"

export default class V extends Component {

  render() {
    const p = this.props

    const styles = StyleSheet.create({
      vContainer: {
        flex: 1,
        alignItems: p.center ? "center" : "flex-start", // note: sometimes "center" breaks proper overflow scrolling
        justifyContent: p.center ? "center" : "flex-start",
        ...p.style
      }
    })

    return (
      <View {...p} center={undefined} style={styles.vContainer}>
        {p.children}
      </View>
    )

  }
}

