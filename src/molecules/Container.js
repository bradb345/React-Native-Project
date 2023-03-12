import React, {useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, StatusBar, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import FileDirectoryScreen from '../screens/FileDirectoryScreen';
import { theme } from '../helpers';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Container = (p) => {
  const Stack = createNativeStackNavigator();

  const [directoryPath, setDirectoryPath] = useState(null);
  const [book, setBook] = useState(null)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // padding: theme.padXM,
      backgroundColor: theme.grey,
      color: theme.gray
    }
  })

  return (
    <SafeAreaView style={styles.container} >
      {/* <Header /> */}
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="HomeScreen">
          {(p) => <HomeScreen {...p} directoryPath={directoryPath} setBook={setBook} />}
        </Stack.Screen>

        <Stack.Screen name="PlayScreen" >
          {(p) => <PlayScreen {...p} 
          directoryPath={directoryPath} 
          book={book}
          />}
        </Stack.Screen>

        <Stack.Screen name="FileDirectoryScreen">
          {(p) => <FileDirectoryScreen {...p} setDirectoryPath={setDirectoryPath} directoryPath={directoryPath} />}
        </Stack.Screen>
      </Stack.Navigator>
    </SafeAreaView>
  )
}

export default Container;