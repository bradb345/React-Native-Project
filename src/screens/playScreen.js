import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Header from '../atoms/Header';
import MainCard from '../atoms/MainCard';
import ProgressSlider from '../atoms/ProgressSlider';

const PlayScreen = (p) => {

  const book = p.book

  const styles = StyleSheet.create({
    container: {
      padding: theme.padXM,
    },
  });

  return (
    <>
      <Header {...p} book={p.book} />

      <V style={styles.container}>

        <V center style={{ width: '100%' }}>
          <MainCard />
        </V>

        <V style={{ width: '100%' }}>
          <Row center>
            <T white small>1:00</T>

            <ProgressSlider />

            <T white small>1:20</T>
          </Row>
        </V>

        <V center
          style={{
            // backgroundColor: theme.grey,
          }}
        >
          <Row center style={{
            width: '50%',
            justifyContent: 'space-between',
          }}>
            <Icon touchable ionicons name="ios-play-back-outline" press={() => p.navigation.goBack()} />
            <Icon touchable ionicons name="ios-play-circle" size={45} press={() => p.navigation.goBack()} />
            <Icon touchable ionicons name="ios-play-forward-outline" press={() => p.navigation.goBack()} />
          </Row>
        </V>

      </V>
    </>
  );
};

export default PlayScreen;