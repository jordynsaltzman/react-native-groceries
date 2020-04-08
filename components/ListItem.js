import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ListItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderRadius: 5,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.25,

    elevation: 5,
    backgroundColor: "#ccc",

    marginVertical: 10,
    width: "100%",
  },
  listItemText: {
    color: "#222",
  },
});
