import React, { Component } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { theme } from "../helpers"
import V from "./V";
import T from "./T";
import { Avatar, Card, IconButton, ProgressBar } from 'react-native-paper';
import Slider from "@react-native-community/slider";


export default class Tile extends Component {
  render() {
    const p = this.props

    const styles = StyleSheet.create({
      tileSlider: {
        // flex: 1,
        width: "100%",
        
        ...p.style
      }
    })

    return (
      <V style={{
        backgroundColor: theme.grey,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10
      }}>
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

        
          <Slider
            value={20}
            
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="blue"
            minimumTrackTintColor="white"
            maximumTrackTintColor="red"
            style={styles.tileSlider}
          />

      </V>


    )
  }
}