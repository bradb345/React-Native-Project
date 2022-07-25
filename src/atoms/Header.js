import React, { Component } from "react"
import { TouchableOpacity, StatusBar } from "react-native"
import { theme } from "../helpers"
import V from '../atoms/V'
import T from "./T"
import Row from '../atoms/Row'
import { useNavigationState } from "@react-navigation/native"

import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from "../atoms/Icon"


class Header extends Component {
  render() {
    const p = this.props

    const currentScreen = p.routes[p.routes.length - 1].name


    console.log("current screen = ", currentScreen);

    const homeScreen = currentScreen === "HomeScreen"
    const playScreen = currentScreen === "PlayScreen"
    const enableBackArrow = p.routes.length > 1


    const styles = {
      header: {
        display: "flex",
        backgroundColor: theme.grey,
        height: 60,
        paddingLeft: theme.padXM,
        paddingRight: theme.padXM,
        justifyContent: 'space-between'
      }
    }

    const onPress = () => {
      console.log("ouch, dont touch me")
    }

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
            <T white >
              Title of book
            </T>
          }
        </Row>
        <Row style={{

        }}>
          <Icon touchable ionicons name="folder-outline" style={{ marginRight: 20 }} press={onPress} />
          <Icon touchable ionicons name="list-outline" style={{ marginRight: 20 }} />
          <Icon touchable ionicons name="settings-outline" style={{ marginLeft: 0 }} />
        </Row>
      </Row>

    )
  }
}

export default function (p) {
  const routes = useNavigationState(state => state.routes);
  return <Header {...p} routes={routes} />
}