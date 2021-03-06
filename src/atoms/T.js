import React, {Component} from 'react';

import { Text } from 'react-native-paper';

export default class T extends Component {
  render() {
    const p = this.props

    const styles = {
      tContainer: {
        fontSize: p.large ? 60 : p.medium ? 30 : 16,
        color: p.white ? "white" : "black",
        ...p.style
      }
    }

    return(
      <Text {...p} white={undefined} large={undefined} medium={undefined} style={styles.tContainer}>

      </Text>
    )
  }
}