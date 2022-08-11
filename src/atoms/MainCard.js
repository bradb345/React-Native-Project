import React, { Component } from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { theme } from "../helpers"
import V from "./V";
import T from "./T";
import Row from "./Row";
import { Avatar, Card, Title, Paragraph, IconButton, ProgressBar } from 'react-native-paper';
import Slider from "@react-native-community/slider";


export default class MainCard extends Component {
  render() {
    const p = this.props

    const styles = StyleSheet.create({
      tileSlider: {
        flex: 1,
        width: "100%",

        ...p.style
      }
    })

    return (
      <V style={{
        width: "100%",
        backgroundColor: theme.grey,
        marginBottom: 10,
        borderRadius: 5,
        padding: 10,
        ...p.style
      }}>
        <Card style={{
          width: "100%"
        }}>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Title title="Card Title" subtitle="Card Subtitle" />
          
        </Card>

        <Row center >
          <T white small>1:00</T>

          <Slider
            value={20}

            minimumValue={0}
            maximumValue={100}
            thumbTintColor="blue"
            minimumTrackTintColor="white"
            maximumTrackTintColor="red"
            style={styles.tileSlider}
          />

          <T white small>1:20</T>
        </Row>
        


      </V>


    )
  }
}