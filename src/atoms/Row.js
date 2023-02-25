import React from "react"
import { View, StyleSheet } from "react-native"

const V = (p) => {

  const styles = StyleSheet.create({
    rContainer: {
      flexDirection: "row",
      alignItems: p.center ? "center" : p.left ? "center" : "flex-start", // note: sometimes "center" breaks proper overflow scrolling
      justifyContent: p.center ? "center" : "flex-start",
      ...p.style
    }
  })

  return (
    <View {...p} center={undefined} left={undefined} style={styles.rContainer}/>
  )

}

export default V;
