import React from 'react';
import { View, StyleSheet } from 'react-native';

const V = (p) => {
  const styles = StyleSheet.create({
    vContainer: {
      alignItems: p.center ? 'center' : 'stretch',
      justifyContent: p.center ? 'center' : 'flex-start',
      ...p.style,
    },
  });

  return <View {...p} center={undefined} style={styles.vContainer} />;
};

export default V;
