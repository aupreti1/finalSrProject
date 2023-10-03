//IMPORT react
import React from "react";
//IMPORT components we will use
import { Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";

//CREATE ListPage function
function ListPage() {
  //RETURN the content
  return (
    //WHEN Keyboard is open - IF the platform is ios add padding behavior, if not add height behavior
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        <Text style={styles.formTextStyles}>LIST PAGE</Text>
    {/* END Keyboard */}
    </KeyboardAvoidingView>
    //END return
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
  //END Styles
});

//EXPORT ListPage
export default ListPage;