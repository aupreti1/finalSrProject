//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image, Platform, KeyboardAvoidingView } from "react-native";
//Import Use Naviagation Hook
import { useNavigation } from '@react-navigation/native';

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
      <Image style={styles.logoStyle} source={require('../../assets/projectImages/treasuremap.png')} />
      {/* Container for the form */}
      <View style={styles.formStyles}>
        {/* TEXT for group name */}
        <Text style={styles.formTextStyles}>Group Name *</Text>
        {/* INPUT for the Group name */}
        <TextInput style={styles.input} onChangeText={onChangeGroupText} value={groupNameText} />
        {/* TEXT for the email */}
        <Text style={styles.formTextStyles}>Email *</Text>
        {/* INPUT for the email */}
        <TextInput style={styles.input} onChangeText={onChangeEmailText} value={emailText} />
        {/* END form container */}
      </View>
      {/* Container for the submit button */}
      <View style={styles.submitButtons}>
        {/* BUTTON for submit - navigates back to the Landing Page */}
        <Button title="SUBMIT" color='#0f3d3d' onPress={() => pageNavigation.navigate("LandingPage")} />
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
    //Adding padding to the bottom of the container
    paddingBottom: 100,
    //END Container Style
  },
  //START styles for the form text
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
    //END styles for the form text
  },
  //START styles for the input field
  input: {
    //Setting the height of the input box
    height: 40,
    //Setting the width of the input box
    width: 300,
    //Set margin
    margin: 12,
    //Set width of the border
    borderWidth: 1,
    //Adding padding 
    padding: 10,
    //END styles for input fields
  },
  //START styles for the submit button
  submitButtons: {
    //Adding space at the top
    top: 40,
    //END styles for submit button
  },
  //START styles for logo image
  logoStyle: {
    //Image Height
    height: 250,
    //Image Width
    width: 250,
    //Resize the Image
    resizeMode: 'contain',
    //Adding space at the bottom
    bottom: 35,
    //END logo styles
  },
  //END Styles
});

//EXPORT Forgot
export default Forgot;