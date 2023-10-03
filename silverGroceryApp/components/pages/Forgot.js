//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image, Platform, KeyboardAvoidingView} from "react-native";
//Import Use Naviagation Hook
import {useNavigation} from '@react-navigation/native';

//CREATE Forgot function
function Forgot() {
  //CREATE the user state for the group name input
  const [groupNameText, onChangeGroupText] = React.useState("");
  //CREATE the user state for email input
  const [emailText, onChangeEmailText] = React.useState("");

  //CREATE the page navigation hook to track navigation state
  const pageNavigation = useNavigation();

  //RETURN the content
  return (
    //WHEN Keybaord is open - IF the platform is ios add padding behavior, if not add height behavior
    <KeyboardAvoidingView keyboardVerticalOffset={190} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
        {/* IMAGE for the logo */}
        <Image style={styles.logoStyle} source={{ uri: "https://cdn.pixabay.com/photo/2013/07/12/18/31/treasure-map-153425_640.png" }} />
      {/* Container for the form */}
      <View style={styles.formStyles}>
        {/* TEXT for group name */}
        <Text style={styles.formTextStyles}>Group Name *</Text>
        {/* INPUT for the froup name */}
        <TextInput style={styles.input} onChangeText={onChangeGroupText} value={groupNameText} />
        {/* TEXT for the email */}
        <Text style={styles.formTextStyles}>Email *</Text>
        {/* INPUT for the email */}
        <TextInput style={styles.input} onChangeText={onChangeEmailText} value={emailText} />
      {/* END input container */}
      </View>
      {/* Container for the submit button */}
      <View style={styles.submitButtons}>
        {/* BUTTON for submit */}
        <Button title="SUBMIT" color='#0f3d3d' onPress={() => pageNavigation.navigate("LandingPage")}/>
      {/* END button container */}
      </View>
    {/* END Keyboard container */}
    </KeyboardAvoidingView>
    //END return
  );
  //END Forgot Function
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
    paddingBottom:100,
    //END Container Style
  },
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  submitButtons: {
    flexDirection: "row",
    top: 40,
  },
  spaceStyle: {
    //Width of space
    width: 20,
    //Height of space
    height: 20,
  },
  logoStyle: {
    //Image Height
    height: 250,
    //Image Width
    width: 250,
    //Resize the Image
    resizeMode: 'contain',
    //Adding space at the bottom
    bottom: 35,
    //END Logo Container
  },
  //END Styles
});

//EXPORT Forgot
export default Forgot;