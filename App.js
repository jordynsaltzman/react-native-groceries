import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ListItem from "./components/ListItem";
import GroceryInput from "./components/GroceryInput";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import AwesomeButtonRick from "react-native-really-awesome-button/src/themes/rick";

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Inter: require("./assets/fonts/Inter-Black.otf"),
    InterLight: require("./assets/fonts/Inter-ExtraLight.otf"),
  });
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

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.root}>
        <LinearGradient
          colors={["#B993D6", "#8CA6DB"]}
          style={styles.linearGradient}
        >
          <View style={styles.header}>
            <Text style={styles.title}>Grocery List</Text>
            <AwesomeButtonRick
              type="primary"
              width={150}
              onPress={() => setModalState(true)}
              textFontFamily="InterLight"
              textSize={18}
            >
              Add an Item!
            </AwesomeButtonRick>
          </View>
        </LinearGradient>
        <View style={styles.mainContainer}>
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
      </View>
    );
  }
}

// pass in a JS object to create method
const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: "Inter",
    textAlign: "center",
    paddingBottom: 10,
    color: "white",
  },

  header: {
    paddingHorizontal: 50,
    paddingTop: 40,
    paddingBottom: 18,
    alignItems: "center",
  },

  mainContainer: {
    paddingHorizontal: 50,
    paddingTop: 10,
    paddingBottom: 50,
  },
  groceryList: {
    paddingHorizontal: 5,
  },
});
