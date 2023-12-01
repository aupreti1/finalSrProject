//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image, Switch, Platform, KeyboardAvoidingView } from "react-native";
//IMPORT Use Naviagation Hook
import { useNavigation } from '@react-navigation/native';

//CREATE Register function
function Register() {
  //CREATE the state for group name 
  const [groupNameText, onChangeGroupText] = React.useState("");
  //CREATE the state for user name 
  const [userNameText, onChangeUserText] = React.useState("");
  //CREATE the state for email
  const [emailText, onChangeEmailText] = React.useState("");
  //CREATE the state for password
  const [passwordText, onChangePasswordText] = React.useState("");
  //CREATE the state for the switch
  const [isSwitched, onChangeSwitch] = React.useState(false);
  //CREATE the page navigation hook to track navigation state
  const pageNavigation = useNavigation();


  //RETURN the content
  return (
    //CREATE a container to hold content
    <KeyboardAvoidingView keyboardVerticalOffset={320} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      {/* IMAGE component for the logo */}
      <Image style={styles.logoStyle} source={require('../../assets/projectImages/pirateship.png')} />
      {/* Container for the switch content */}
      <View style={styles.switchContainer}>
        {/* SWITCH component */}
        <Switch
          // Setting the color of the track
          trackColor={{ false: '#767577', true: '#00857a' }}
          //Setting the color of the button
          thumbColor='#c1e2e7'
          //Background color for iOS only
          ios_backgroundColor="#3e3e3e"
          //When the switch is activated, check if it is on or off
          onValueChange={() => onChangeSwitch(isSwitched ? false : true)}
          //Set the state of the switch
          value={isSwitched}
        //End Switch Component
        />
        {/* Adding space between switch button and text */}
        <View style={styles.spaceStyle}></View>
        {/* Text to describe the purpose of the switch button */}
        <Text style={styles.switchText}>Joining an Existing Group</Text>
        {/* End switch container */}
      </View>
      {/* Container for the form content */}
      <View style={styles.formStyles}>
        {/* Text for the Group Name field */}
        <Text style={styles.formTextStyles}>Group Name *</Text>
        {/* Input field for Group Name */}
        <TextInput style={styles.input} onChangeText={onChangeGroupText} value={groupNameText} />
        {/* Text for the User Name field */}
        <Text style={styles.formTextStyles}>User Name *</Text>
        {/* Input field for the User Name */}
        <TextInput style={styles.input} onChangeText={onChangeUserText} value={userNameText} />
        {/* Text for the Email field */}
        <Text style={styles.formTextStyles}>Email *</Text>
        {/* Input field for the Email */}
        <TextInput style={styles.input} onChangeText={onChangeEmailText} value={emailText} />
        {/* Text for the Password Field */}
        <Text style={styles.formTextStyles}>Password *</Text>
        {/* Input for the user's password */}
        <TextInput style={styles.input} onChangeText={onChangePasswordText} value={passwordText} secureTextEntry />
        {/* End form container */}
      </View>
      {/* Container for the Register Button */}
      <View style={styles.registerButton}>
        {/* Register Button - navigates to the invite page when activated */}
        <Button title="REGISTER" color='#0f3d3d' onPress={() => pageNavigation.navigate("InvitePage")} />
        {/* End Register Button Container */}
      </View>
      {/* END keyboard container that holds content */}
    </KeyboardAvoidingView>
    //END return
  );
  //END Landing Function
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
  //START styles for the switch container
  switchContainer: {
    //Align the text and button next to each other
    flexDirection: "row",
    //Adding space at the bottom
    bottom: 30,
    //END switch styles
  },
  //START styles for the switch text
  switchText: {
    //Color of the text
    color: '#0f3d3d',
    //Size of the text
    fontSize: 18,
    //END switch text styles
  },
  //START styles for the form text
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
    //END styles for form text
  },
  //START input styles
  input: {
    //Height of the input field
    height: 40,
    //Width of the input field
    width: 300,
    //Margin around input field
    margin: 12,
    //Width of the boarder around the input field
    borderWidth: 1,
    //Padding on the input field 
    padding: 10,
    //END input styles
  },
  //START styles for the register button
  registerButton: {
    //Adding space at the top
    top: 15,
    //END register button styling
  },
  //START space styles for space between switch and text
  spaceStyle: {
    //Width of space
    width: 20,
    //Height of space
    height: 20,
    //END spacing styles
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
    //END Logo Container
  },
  //END Styles
});

//EXPORT Register
export default Register;