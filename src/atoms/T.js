import React from 'react';
import { Text } from 'react-native-paper';

const T = (p) => {
  const styles = {
    tContainer: {
      fontSize: p.large ? 60 : p.medium ? 40 : p.small ? 14 : 26,
      color: p.white ? "white" : "black",
      alignItems: p.center ? "center" : "stretch",
      justifyContent: p.center ? "center" : "flex-start",
      ...p.style
    }
  }

  return (
    <Text {...p} white={undefined} large={undefined} medium={undefined} small={undefined} center={undefined} style={styles.tContainer} />
  )
}

export default T;
