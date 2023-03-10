
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../helpers';
import Header from '../atoms/Header';
import V from '../atoms/V';
import T from '../atoms/T';
import { View, Button, } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const FileDirectoryScreen = (p) => {
  const [directoryPath, setDirectoryPath] = useState(null);

  const styles = StyleSheet.create({
    container: {
      padding: theme.padXM,
    },
  });

  const handleDocumentSelect = async () => {
    try {
      const result = await DocumentPicker.pickDirectory({
        type: [DocumentPicker.types.allFiles],
      });
      console.log("the result.uri is: ", result.uri); 

      console.log('result.type:', result.type)// mime type
      
      console.log('result.name:', result.name)
      
      console.log('result.size:', result.size)
      
      setDirectoryPath(result.uri);
    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('User cancelled the picker');
      } else {
        console.log('Error selecting document', error);
      }
    }
  };

  return (
    <>
    <Header {...p}/>

      <V style={styles.container}>
        <Button title="Select directory" onPress={handleDocumentSelect} />
        {directoryPath && <T white>Selected directory: {directoryPath}</T>}
      </V>
    </>
  );
};

export default FileDirectoryScreen;