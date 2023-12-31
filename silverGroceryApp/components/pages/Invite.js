//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image, Platform, KeyboardAvoidingView } from "react-native";
//IMPORT Use Navigation Hook
import { useNavigation } from '@react-navigation/native';

//CREATE Invite function
function Invite() {
  //CREATE the user state for the email invite input
  const [inviteEmailText, onChangeInviteEmailText] = React.useState("");
  //CREATE the page navigation hook to track navigation state
  const pageNavigation = useNavigation();

  //RETURN the content
  return (
    //WHEN Keybaord is open - IF the platform is ios add padding behavior, if not add height behavior
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* IMAGE logo element */}
      <Image style={styles.logoStyle} source={require('../../assets/projectImages/treasurechestparrot.png')} />
      {/* Container for the form */}
      <View style={styles.formStyles}>
        {/* TEXT so the user knows what to put in the input */}
        <Text style={styles.formTextStyles}>Email Of The Person You Want To Invite</Text>
        {/* INPUT for the email invite */}
        <TextInput style={styles.input} onChangeText={onChangeInviteEmailText} value={inviteEmailText} />
        {/* END form container */}
      </View>
      {/* Container for the Buttons */}
      <View style={styles.skipInviteButtons}>
        {/* BUTTON to skip invite and navigate to the Sign In page */}
        <Button title="SIGN IN" color='#0f3d3d' onPress={() => pageNavigation.navigate("SignInPage")} />
        {/* BUTTON to Invite another user */}
        <Button title="INVITE" color='#0f3d3d' />
        {/* END buttons container */}
      </View>
      {/* END keyboard container */}
    </KeyboardAvoidingView>
    //END return
  );
  //END Invite Function
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
  //START styles for form text
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
    //END styles for form text
  },
  //START styles for the input field
  input: {
    //Height of the box
    height: 40,
    //Width of the box
    width: 300,
    //Margin on the box
    margin: 12,
    //Width of the boarder around the box
    borderWidth: 1,
    //Adding padding 
    padding: 10,
    //END styles for the input field 
  },
  //START styles for the buttons
  skipInviteButtons: {
    //Align the buttons next to each other
    flexDirection: "row",
    //Add space at the top 
    top: 40,
    //END button styles
  },
  //START logo styles
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

//EXPORT Invite
export default Invite;