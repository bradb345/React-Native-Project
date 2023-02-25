import React from "react";
import { TouchableOpacity } from "react-native";
import { theme } from "../helpers";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Icon = ({ touchable, press, ionicons, materialicons, materialCommunityIcons, name, size = 25, color = "#fff", style }) => {

  const iconStyle = {
    fontSize: size,
    color: color,
    ...style
  };

  return (
    <>
      {touchable ? (
        <TouchableOpacity onPress={press}>
          {ionicons && <Ionicons name={name || "heart-outline"} style={{ ...iconStyle }} />}
          {materialicons && <MaterialIcons name={name || "star-rate"} style={{ ...iconStyle }} />}
          {materialCommunityIcons && <MaterialCommunityIcons name={name || "star-rate"} style={{ ...iconStyle }} />}
        </TouchableOpacity>
      ) : (
        <>
          {ionicons && <Ionicons name={name || "heart-outline"} style={{ ...iconStyle }} />}
          {materialicons && <MaterialIcons name={name || "star-rate"} style={{ ...iconStyle }} />}
          {materialCommunityIcons && <MaterialCommunityIcons name={name || "star-rate"} style={{ ...iconStyle }} />}
        </>
      )}
    </>
  );
};

export default Icon;
