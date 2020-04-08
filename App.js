import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import GroceryInput from "./components/GroceryInput";

export default function App() {
  const [groceries, setGroceries] = useState([]);
  const [modalState, setModalState] = useState([]);

  const addItemHandler = (groceryTitle) => {
    setGroceries((currentGroceries) => [
      ...currentGroceries,
      { id: Math.random().toString(), value: groceryTitle },
    ]);
    setModalState(false);
  };

  const removeGoalHandler = (groceryId) => {
    setGroceries((currentGroceries) => {
      //filter returns a new array based on the old array filtered by a certain criteria
      //you pass a function to filter which runs on every element in the array
      return currentGroceries.filter((grocery) => grocery.id !== groceryId);
    });
  };

  const cancelAddGrocery = () => {
    setModalState(false);
  };

  return (
    <View style={styles.root}>
      <Text style={{ fontSize: 20, textAlign: "center", paddingBottom: 10 }}>
        Grocery List
      </Text>
      <Button title="Add Grocery Item" onPress={() => setModalState(true)} />
      <GroceryInput
        visible={modalState}
        onPress={addItemHandler}
        onCancel={cancelAddGrocery}
      />
      <FlatList
        style={styles.groceryList}
        //takes a function w two args that tells flatlist how to extract your key
        keyExtractor={(item, index) => item.id}
        data={groceries}
        renderItem={(itemData) => (
          <ListItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

// pass in a JS object to create method
const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
  groceryList: {
    paddingHorizontal: 5,
  },
});
