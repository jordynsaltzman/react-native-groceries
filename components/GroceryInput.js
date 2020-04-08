import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Modal } from "react-native";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

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
    <Modal
      visible={props.visible}
      transparent={true}
      animationType="slide"
      style={styles.modal}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Item Name"
            style={styles.inputBox}
            onChangeText={itemInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <AwesomeButtonRick
                type="secondary"
                width={90}
                textFontFamily="InterLight"
                textSize={18}
                onPress={props.onCancel}
              >
                Cancel
              </AwesomeButtonRick>
            </View>
            <View style={styles.button}>
              <AwesomeButtonRick
                type="primary"
                width={90}
                textFontFamily="InterLight"
                textSize={18}
                onPress={addGroceryHandler}
              >
                Add
              </AwesomeButtonRick>
            </View>
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
    backgroundColor: "#b3e5e1",
    height: 210,
    width: "90%",
    borderRadius: 10,
    borderColor: "#67cbc3",
    borderWidth: 2,
    shadowColor: "#ccc",
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 3 },
  },
  inputBox: {
    borderBottomColor: "#ccc",
    fontFamily: "InterLight",
    fontSize: 18,
    borderBottomWidth: 1,
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "60%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
    margin: 5,
  },
});
