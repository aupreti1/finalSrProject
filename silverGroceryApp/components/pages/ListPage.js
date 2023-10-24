//IMPORT react
import React from "react";
//IMPORT components we will use
import { Text, View, Button, TextInput, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";

//CREATE ListPage function
function ListPage() {

  //CREATE the use state for the input field
  const [userInput, setUserInput] = React.useState("");
  //CREATE the use state for the items and make it an array
  const [listItem, setListItem] = React.useState([]);

  //FUNCTION to add the user input to the listItem array
  const addListItems = () => {
    //CREATE a new Item array to add to listItem
    const newItem = [...listItem];
    //SAVING the userInput to the end of the newItem array
    newItem.push(<Text>{userInput}</Text>);
    //SET the new item to the list item array
    setListItem(newItem);
    //SET the user input to empty
    setUserInput('');
  //END addListItem Function
  };


  //RETURN the content
  return (
    //WHEN Keyboard is open - IF the platform is ios add padding behavior, if not add height behavior
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* TEXT so the user knows what to put in the input */}
      <Text style={styles.formTextStyles}>Add an Item to the List: </Text>
      <View style={styles.formStyles}>
        {/* INPUT for the email invite */}
        <TextInput style={styles.input} value={userInput} onChangeText={(userInput) => setUserInput(userInput)} />
        <View style={styles.addItemButton}>
          {/* BUTTON to Invite another user */}
          <Button title="+" color='#0f3d3d' onPress={addListItems} />
          {/* END buttons container */}
        </View>
        {/* END form container */}
      </View>
      {/* CONTAINER for the new list item to show */}
      <View>
        {/* LOOP through the listItem array looking at each item */}
        {listItem.map((item) => {
          // RETURN statement for the item in listItem
          return (
            // TEXT component to display item
            <Text style={styles.listItemDisplay}>{item}</Text>
          //END Return
          );
        //END loop
        })}
      {/* END display item container */}
      </View>
      {/* END Keyboard */}
    </KeyboardAvoidingView>
    //END Return
  );
  //END ListPage Function
}

//CREATE styles
const styles = StyleSheet.create({
  //Start Container Styles
  container: {
    //Flex to Screen
    flex: 1,
    //Background color
    backgroundColor: '#d6f5f5',
    //Centers whole ele
    alignItems: 'center',
    //Centers children
    justifyContent: 'center',
    //END Container Style
  },
  //Start of the form styles
  formStyles: {
    //Make the input and add button next to each other
    flexDirection: "row",
  },
  //Start the styles for the form text
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
  },
  //
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  addItemButton: {
    top: 10,
  },
  listItemDisplay: {
    padding: 10,
  },
  //END Styles
});

//EXPORT ListPage
export default ListPage;