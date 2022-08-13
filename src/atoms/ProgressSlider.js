import React, { Component } from "react"
import { TouchableOpacity, StyleSheet, View } from "react-native"
import { theme } from "../helpers"
import V from "./V"
import T from "./T";
import Row from "./Row"

import { Slider } from "@miblanchard/react-native-slider";


export default class ProgressSlider extends Component {
  render() {
    const p = this.props

    const styles = StyleSheet.create({
      thumb: {
        width: p.home ? 0 : 10,
        height: p.home ? 0 : 10,
      },
      container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center',
        // padding: 10,
      }
    })


    return (
      <V
        style={styles.container}
        {...p}
      >
        <Slider
          value={20}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor={theme.postRollColor}
          thumbStyle={styles.thumb}
          thumbTouchSize={p.home ? 0 : 20}
          minimumTrackTintColor={theme.postRollColor}
          maximumTrackTintColor={theme.preRollColor}
        />
      </V>
    )
  }
}