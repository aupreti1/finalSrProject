//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image, Switch, Platform, KeyboardAvoidingView } from "react-native";
//IMPORT Use Naviagation Hook
import {useNavigation} from '@react-navigation/native';

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

  const [isSwitched, onChangeSwitch] = React.useState(false);
  const pageNavigation = useNavigation();


  //RETURN the content
  return (
    //CREATE a container to hold content
    <KeyboardAvoidingView keyboardVerticalOffset={320} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <Image style={styles.logoStyle} source={{ uri: "https://cdn.pixabay.com/photo/2016/04/01/09/10/boat-1299188_640.png" }} />
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#00857a' }}
          thumbColor='#c1e2e7'
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => onChangeSwitch(isSwitched ? false : true)}
          value={isSwitched}
        />
        <View style={styles.spaceStyle}></View>
        <Text style={styles.switchText}>Joining an Existing Group</Text>
      </View>
      <View style={styles.formStyles}>
        <Text style={styles.formTextStyles}>Group Name *</Text>
        <TextInput style={styles.input} onChangeText={onChangeGroupText} value={groupNameText} />
        <Text style={styles.formTextStyles}>User Name *</Text>
        <TextInput style={styles.input} onChangeText={onChangeUserText} value={userNameText} />
        <Text style={styles.formTextStyles}>Email *</Text>
        <TextInput style={styles.input} onChangeText={onChangeEmailText} value={emailText} />
        <Text style={styles.formTextStyles}>Password *</Text>
        <TextInput style={styles.input} onChangeText={onChangePasswordText} value={passwordText} secureTextEntry/>
      </View>
      <View style={styles.registerButton}>
        <Button title="REGISTER" color='#0f3d3d' onPress={() => pageNavigation.navigate("InvitePage")}/>
      </View>
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
  switchContainer: {
    flexDirection: "row",
    bottom: 30,
  },
  switchText: {
    color: '#0f3d3d',
    fontSize: 18,
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
  registerButton: {
    top: 15,
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

//EXPORT Register
export default Register;