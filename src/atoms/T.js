import React, {Component} from 'react';

import { Text } from 'react-native-paper';

export default class T extends Component {
  render() {
    const p = this.props

    const styles = {
      tContainer: {
        fontSize: p.large ? 60 : p.medium ? 40 : p.small ? 14 : 26,
        color: p.white ? "white" : "black",
        alignItems: p.center ? "center" : "stretch", // note: sometimes "center" breaks proper overflow scrolling
        justifyContent: p.center ? "center" : "flex-start",
        ...p.style
      }
    }

    return(
      <Text {...p} white={undefined} large={undefined} medium={undefined} small={undefined} center={undefined} style={styles.tContainer}/>

    )
  }
}