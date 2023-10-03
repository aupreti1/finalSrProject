//Importing everything react from react
import * as React from "react";
//Importing NavigationContainer component 
import { NavigationContainer } from '@react-navigation/native';
//Import createStackNavigator function
import { createStackNavigator } from "@react-navigation/stack";
//import { Alert } from "react-native";

//Import components from their components file
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Invite from "./pages/Invite";
import ListPage from "./pages/ListPage";
// import FailedSignIn from "./pages/FailedSignIn";

//Creating the Stack 
const Stack = createStackNavigator();

export const AuthContext = React.createContext({
    hasUser: false,
    setUser: () => { }
});


//Function for project naviagtion
const ProjectNavigation = () => {

    const { hasUser } = React.useContext(AuthContext);

    //Return statemnet
    return (
        //Navigation Container Component
        <NavigationContainer>
            {/* Stack Naviagtion */}
            <Stack.Navigator>
                {/* Creating the screen for navigating - Landing Page */}
                <Stack.Screen
                    //Creating the name of the page
                    name="LandingPage"
                    //Calling the component to show on the page
                    component={Landing}
                    //Styling for the navigation header
                    options={{ headerShown: false, title: "Home" }}
                //END landing page stack
                />
                {/* Creating the screen for navigating - SignIn Page */}
                <Stack.Screen
                    //Creating the name of the page
                    name="SignInPage"
                    //Calling the component to show on the page
                    component={SignIn}
                    //Styling for the navigation header
                    options={{
                        title: "Sign In",
                        headerStyle: { backgroundColor: '#a0c4d1' },
                        headerTitleStyle: { color: '#0f3d3d' },
                        headerBackTitleStyle: { color: '#0f3d3d' },
                        headerTintColor: '#0f3d3d'
                    }}
                //END sign in page stack
                />
                {/* Creating the screen for navigating - Register Page */}
                <Stack.Screen
                    //Creating the name of the page
                    name="RegisterPage"
                    //Calling the component to show on the page
                    component={Register}
                    //Styling for the navigation header
                    options={{
                        title: "Register",
                        headerStyle: { backgroundColor: '#a0c4d1' },
                        headerTitleStyle: { color: '#0f3d3d' },
                        headerBackTitleStyle: { color: '#0f3d3d' },
                        headerTintColor: '#0f3d3d'
                    }}
                //END regiter page stack
                />
                {/* Creating the screen for navigating - Forgot Password Page */}
                <Stack.Screen
                    //Creating the name of the page
                    name="ForgotPage"
                    //Calling the component to show on the page
                    component={Forgot}
                    //Styling for the navigation header
                    options={{
                        title: "Forgot Password",
                        headerStyle: { backgroundColor: '#a0c4d1' },
                        headerTitleStyle: { color: '#0f3d3d' },
                        headerBackTitleStyle: { color: '#0f3d3d' },
                        headerTintColor: '#0f3d3d'
                    }}
                //END forgot page stack
                />
                {/* Creating the screen for navigating - Invite Page */}
                <Stack.Screen
                    //Creating the name of the page
                    name="InvitePage"
                    //Calling the component to show on the page
                    component={Invite}
                    //Styling for the navigation header
                    options={{
                        title: "Invite Someone",
                        headerStyle: { backgroundColor: '#a0c4d1' },
                        headerTitleStyle: { color: '#0f3d3d' },
                        headerBackTitleStyle: { color: '#0f3d3d' },
                        headerTintColor: '#0f3d3d'
                    }}
                //END invite page stack
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//EXPORT Navigation
export default ProjectNavigation;