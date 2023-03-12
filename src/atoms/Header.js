import React from "react";
import { TouchableOpacity, StatusBar, Dimensions } from "react-native";
import { theme } from "../helpers";
import V from '../atoms/V';
import T from "./T";
import Row from '../atoms/Row';
import { useNavigationState } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "../atoms/Icon";

const SCREEN_WIDTH = Dimensions.get('window').width; // get the screen width

const Header = (p) => {

  const currentScreen = p.routes[p.routes.length - 1].name;

  console.log("current screen = ", currentScreen);

  const homeScreen = currentScreen === "HomeScreen";
  const playScreen = currentScreen === "PlayScreen";
  const fileDirectoryScreen = currentScreen === "FileDirectoryScreen";
  const enableBackArrow = p.routes.length > 1;

  const maxChars = Math.floor(SCREEN_WIDTH / 25); // set the maximum number of characters based on the screen width

  const styles = {
    header: {
      display: "flex",
      backgroundColor: theme.grey,
      height: 60,
      paddingLeft: theme.padXM,
      paddingRight: theme.padXM,
      justifyContent: 'space-between'
    }
  };

  const onPress = () => {
    console.log("ouch, dont touch me");
    p.navigation.navigate("FileDirectoryScreen");
    
  };

  const title = p.book?.title || "book undefined"; // replace with the actual title

  const truncatedTitle = title.length > maxChars ? `${title.substring(0, maxChars)}...` : title; // truncate the title if needed

  return (
    <Row left style={styles.header}>
      {/* <StatusBar  barStyle="light-content" translucent={true} /> */}
      <Row>
        {enableBackArrow &&
          <Icon
            touchable
            ionicons
            name="arrow-back"
            style={{
              marginRight: 20,
              paddingTop: 2
            }}
            press={() => p.navigation.goBack()} />
        }

        {homeScreen &&
          <T white >
            Audiobook Player
          </T>
        }
        {playScreen &&
          <T ellipsizeMode='tail' numberOfLines={1} white>
            {truncatedTitle} {/* use the truncated title */}
          </T>
        }
        {fileDirectoryScreen &&
          <T white >
            File Directory
          </T>
        }
      </Row>
      <Row style={{}}>
        <Icon touchable ionicons name="folder-outline" style={{ marginRight: 20 }} press={onPress} />
        <Icon touchable ionicons name="list-outline" style={{ marginRight: 20 }} />
        <Icon touchable ionicons name="settings-outline" style={{ marginLeft: 0 }} />
      </Row>
    </Row>
  );
};

export default function (p) {
  const routes = useNavigationState(state => state.routes);
  return <Header {...p} routes={routes} />;
}
