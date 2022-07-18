import React, { Component } from "react"
import { TouchableOpacity } from "react-native"
import { theme } from "../helpers"
import V from "./V";
import T from "./T";
import { Avatar, Card, IconButton, ProgressBar } from 'react-native-paper';
import Slider from "@react-native-community/slider";


export default class Tile extends Component {
  render() {
    const p = this.props
    return (
      <V style={{
        backgroundColor: theme.darkGrey,
        marginBottom: 10,
        borderRadius: 5,
      }}>
        <Card.Title
          title="Card Titlee"
          subtitle="Card Subtitle"
          left={(props) => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="more-vert" onPress={() => { }} />}
          titleStyle={{
            backgroundColor: theme.darkGrey,
            color: "white",
          }}
          subtitleStyle={{
            backgroundColor: theme.darkGrey,
            color: "white",
          }}
          leftStyle={{
            backgroundColor: theme.darkGrey,
            color: "white",
          }}
          rightStyle={{
            backgroundColor: theme.darkGrey,
            color: "white",
          }}
          style={{
            // backgroundColor: theme.darkGrey,
          }}
        />

        
          <Slider
            value={20}
            
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="blue"
            minimumTrackTintColor="white"
            maximumTrackTintColor="red"
            style={{
              width: "100%",
              height: 20,
              padding: 5
            }}
          />

      </V>


    )
  }
}