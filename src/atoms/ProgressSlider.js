import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { theme } from "../helpers";
import V from "./V";
import T from "./T";
import Row from "./Row";
import { Slider } from "@miblanchard/react-native-slider";

const ProgressSlider = (p) => {
  const styles = StyleSheet.create({
    thumb: {
      width: p.untouchable ? 0 : 10,
      height: p.untouchable ? 0 : 10,
    },
    container: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "stretch",
      justifyContent: "center",
      // padding: 10,
    },
  });

  return (
    <V style={{ ...styles.container }}>
      <Slider
        value={20}
        minimumValue={0}
        maximumValue={100}
        thumbTintColor={theme.postRollColor}
        thumbStyle={styles.thumb}
        minimumTrackTintColor={theme.postRollColor}
        maximumTrackTintColor={theme.preRollColor}
        disabled={p.untouchable}
      />
    </V>
  );
};

export default ProgressSlider;
