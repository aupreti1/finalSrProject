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

  //FUNCTION to remove an item from the listItem array
  const removeListItems = (i) => {
    //CREATE a new array to remove an item from listItem
    const removeItem = [...listItem];
    //REMOVE only one item at (i) location
    removeItem.splice(i, 1);
    //SET the list item
    setListItem(removeItem);
    //END removeListItems function
  };


  //RETURN the content
  return (
    //WHEN Keyboard is open - IF the platform is ios add padding behavior, if not add height behavior
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* TEXT so the user knows what to put in the input */}
      <Text style={styles.formTextStyles}>Add an Item to the List: </Text>
      {/* CONTAINER for the form */}
      <View style={styles.formStyles}>
        {/* INPUT for the user input */}
        <TextInput style={styles.input} value={userInput} onChangeText={(userInput) => setUserInput(userInput)} />
        {/* CONTAINER for the add button  */}
        <View style={styles.addItemButton}>
          {/* BUTTON to add an item - CALLS addListItem function */}
          <Button title="+" color='#0f3d3d' onPress={addListItems} />
          {/* END buttons container */}
        </View>
        {/* END form container */}
      </View>
      {/* CONTAINER for the new list item to show */}
      <View>
        {/* LOOP through the listItem array looking at each item */}
        {listItem.map((item, i) => {
          // RETURN statement for the item in listItem
          return (
            // VIEW component to add key to the list items
            <View key={"li-" + i} style={styles.itemsDisplay}>
              {/* TEXT component to display item */}
              <Text style={styles.listItemDisplay}>{item}</Text>
              {/* DELETE button next to item - CALLS removeListItems */}
              <Button title="x" color='#0f3d3d' onPress={() => removeListItems(i)} />
              {/* END view key component  */}
            </View>
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
    //End form styles
  },
  //Start the styles for the form text
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
    //End styles for form text
  },
  //Start the input styles
  input: {
    //Height of the box 
    height: 40,
    //Width of the box
    width: 300,
    //Margin on box
    margin: 12,
    //Width of the boarder around the box
    borderWidth: 1,
    //Padding on the box
    padding: 10,
    //End input styles
  },
  //Start add button styles
  addItemButton: {
    //Top spacing on button
    top: 10,
    //End add button styles 
  },
  //Start styles for the items display
  listItemDisplay: {
    //Adding padding
    padding: 10,
    //Adding Margin Right
    marginRight: 10,
    //End items style
  },
  //Start styles for items and delete button
  itemsDisplay: {
    //Align the item and delete button
    flexDirection: "row",
    //End styles for the delete button and items
  }
  //END Styles
});

//EXPORT ListPage
export default ListPage;