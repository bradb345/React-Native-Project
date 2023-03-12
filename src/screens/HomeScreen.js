import React, {useState} from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { theme } from '../helpers';
import V from '../atoms/V';
import T from '../atoms/T';
import Row from '../atoms/Row';
import Icon from '../atoms/Icon';
import Header from '../atoms/Header';
import Tile from '../atoms/Tile';

const HomeScreen = (p) => {

  

  const directoryPath = p.directoryPath
  

  const styles = StyleSheet.create({
    container: {
      padding: theme.padXM,
    },
    scrollView: {
      marginBottom: 70,
    },
  });

  const runTime = (hours)=>{
    if(!hours) return "00:00"


    return (
      <Row>
        <Icon touchable ionicons name="time" size={15} style={{marginRight: 10}}/>
        <T white small>hours</T>
      </Row>
    )
  }

  const handlePress = (item) => {
    p.setBook(item)
    console.log("a book has been selected", item);
    p.navigation.navigate("PlayScreen")
  }

  const renderTiles = () => {
    if (directoryPath) {
      return null;
    }

    // replace this with your code to get the list of files in the selected directory
    const fileList = [
      {
        title: 'book with reaaaallly long title',
        runTime: "11:00:00"
      }, {
        title: 'file2',
        runTime: "12:00:00"
      }, {
        title: 'file3',
        runTime: "13:00:00"
      }
];

    return fileList.map((item) => (
      <Tile bookTitle={item.title} runTime={runTime(item.runTime)} press={()=>handlePress(item)} />
    ));
  };

  return (
    <>
      <Header {...p} />
      <V style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <V style={{ marginBottom: 20 }}>
            <T white> Started </T>
          </V>
          <V>
            {renderTiles()}
          </V>
        </ScrollView>
      </V>
    </>
  );
};

export default HomeScreen;