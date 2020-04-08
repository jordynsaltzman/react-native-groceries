import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

const ListItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.listItem}>
        <View style={styles.listItemText}>
          <Text style={{ fontSize: 18, fontFamily: "InterLight" }}>
            {props.title}
          </Text>
        </View>
        <View style={styles.button}>
          <AwesomeButtonRick
            type="secondary"
            width={50}
            textSize={18}
            onPress={props.onDelete.bind(this, props.id)}
          >
            X
          </AwesomeButtonRick>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  listItemText: {
    flex: 6,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginRight: 20,
  },
  button: {
    flex: 2,
    alignItems: "center",
  },
});
