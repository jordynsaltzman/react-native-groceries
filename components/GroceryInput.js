import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";

const GroceryInput = (props) => {
  const [enteredGroceryItem, setEnteredGroceryItem] = useState("");
  //function to update state with whatever the user is entering in the textInput
  const itemInputHandler = (enteredText) => {
    setEnteredGroceryItem(enteredText);
  };

  const addGroceryHandler = () => {
    props.onPress(enteredGroceryItem);
    setEnteredGroceryItem("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Item Name"
          style={styles.inputBox}
          onChangeText={itemInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGroceryHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GroceryInput;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inputBox: {
    borderRadius: 5,
    borderColor: "#222",
    borderWidth: 1,
    width: "80%",
    padding: 10,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    width: "40%",
  },
});
