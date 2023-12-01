//Importing everything react from react
import * as React from "react";
//Importing NavigationContainer component 
import { NavigationContainer } from '@react-navigation/native';
//Import createStackNavigator function
import { createStackNavigator } from "@react-navigation/stack";
//Import AuthContext hook from authentication file
import { AuthContext } from "./Authentication";

//Import components from their components file
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Invite from "./pages/Invite";
import ListPage from "./pages/ListPage";

//Creating the Stack 
const Stack = createStackNavigator();

//Function for project naviagtion
const ProjectNavigation = () => {
    //CALL AuthContext hook and set hasUser
    const { hasUser } = React.useContext(AuthContext);

    //Return statemnet
    return (
        //Navigation Container Component
        <NavigationContainer>
            {/* Stack Naviagtion */}
            {/* If hasUser doesn't exist show landing, sign in, register, invite, and forgot pages */}
            <Stack.Navigator>
                {!hasUser ? (
                    <>
                        <Stack.Screen
                            //Creating the name of the page
                            name="LandingPage"
                            //Calling the component to show on the page
                            component={Landing}
                            //Styling for the navigation header
                            options={{ headerShown: false, title: "Home" }}
                        //END landing page stack
                        />

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
                    </>) : (
                    <Stack.Screen
                        //</>) : ( => if the user exists then show the list page
                        //Creating the name of the page
                        name="ListPage"
                        //Calling the component to show on the page
                        component={ListPage}
                        //Styling for the navigation header
                        options={{
                            title: "List Page",
                            headerStyle: { backgroundColor: '#a0c4d1' },
                            headerTitleStyle: { color: '#0f3d3d' },
                            headerBackTitleStyle: { color: '#0f3d3d' },
                            headerTintColor: '#0f3d3d'
                        }}
                    />
                )}
            </Stack.Navigator>
            {/* END Navigation */}
        </NavigationContainer>
        //END Return
    );
    //END Funtion
}

//EXPORT Navigation
export default ProjectNavigation;