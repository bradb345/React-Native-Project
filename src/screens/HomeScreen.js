import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Header from '../atoms/Header';
import Tile from '../atoms/Tile';

const HomeScreen = (p) => {

  const styles = StyleSheet.create({
    container: {
      padding: theme.padXM,
    },
    scrollView: {
      marginBottom: 70,
    },
  });

  return (
    <>
      <Header {...p} />
      <V style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <V style={{ marginBottom: 20 }}>
            <T white> Started </T>
          </V>
          <V>
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
            <Tile press={() => p.navigation.navigate("PlayScreen")} />
          </V>
        </ScrollView>
      </V>
    </>
  );
};

export default HomeScreen;