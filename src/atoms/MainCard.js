import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { theme } from "../helpers";
import V from "./V";
import T from "./T";
import Row from "./Row";
import { Avatar, Card, Title, Paragraph, IconButton, ProgressBar } from 'react-native-paper';
import ProgressSlider from "./ProgressSlider";

const MainCard = (p) => {
  return (
    <V style={{
      width: "100%",
      backgroundColor: theme.grey,
      marginBottom: 10,
      borderRadius: 5,
      padding: 10,
      // ...p.style
    }}>
      <Card style={{
        width: "100%"
      }}>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Title title="Card Title" subtitle="Card Subtitle" />
          
      </Card>

    </V>
  );
};

export default MainCard;
