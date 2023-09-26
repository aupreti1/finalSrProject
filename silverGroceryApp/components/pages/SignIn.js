//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

//CREATE SignIn function
function SignIn() {
  const [text, onChangeText] = React.useState();
    //RETURN the content
    return (
        //CREATE a container to hold content
        <View style={styles.container}>
          <View style={styles.headingStyle}>
            <Button title="Back" color='#0f3d3d'/>
            <View style={styles.spaceStyle}></View>
            <Text style={styles.headingTextStyles}>Sign In</Text>
          </View>
          <View style={styles.formStyles}>
            <Text style={styles.formTextStyles}>Group Name *</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
            <Text style={styles.formTextStyles}>User Name *</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
            <Text style={styles.formTextStyles}>Password *</Text>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
          </View>
          <View style={styles.passLogButtons}>
            <Button title="Forgot Password"color='#0f3d3d'/>
            <View style={styles.spaceStyle}></View>
            <Button title="Sign In" color='#0f3d3d'/>
          </View>
        </View>
        //END return
    );
    //END SignIn Function
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
    headingStyle: {
       flexDirection: "row",
       bottom: 40,
    },
    headingTextStyles: {
      //Color for the text
        color: '#0f3d3d',
        //Text size
        fontSize: 40,
        //Font family stye
        
    },
    formTextStyles: {
        //Color for the text
        color: '#0f3d3d',
        //Text size
        fontSize: 18,
        //Font family stye
        fontFamily: 'arial',
    },
    input: {
      height: 40,
      width: 300,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    passLogButtons: {
      flexDirection: "row",
      top: 40,
    },
    spaceStyle: {
        //Width of space
        width: 20,
        //Height of space
        height: 20,
    },
    //END Styles
});

//EXPORT Landing
export default SignIn;