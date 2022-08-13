import React, { Component } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { theme } from "../helpers"
import V from "./V";
import T from "./T";
import { Avatar, Card, IconButton, ProgressBar } from 'react-native-paper';
import ProgressSlider from "./ProgressSlider";


export default class Tile extends Component {
  render() {
    const p = this.props

    const styles = StyleSheet.create({

    })


    return (
      <V

        style={{
          backgroundColor: theme.grey,
          marginBottom: 10,
          borderRadius: 5,
          width: "100%",
          height: 100

        }}
      >


        <Card.Title
          title="Card Title"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
          titleStyle={{
            backgroundColor: theme.grey,
            color: "white",
          }}
          subtitleStyle={{
            backgroundColor: theme.grey,
            color: "white",
          }}
          leftStyle={{
            backgroundColor: theme.grey,
            color: "white",
          }}
          rightStyle={{
            backgroundColor: theme.grey,
            color: "white",
          }}
          style={{
            // backgroundColor: theme.darkGrey,
          }}
        />


        <ProgressSlider home />

      </V>

    )
  }
}