import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProjectNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={Landing}
                    option={{title:"WELCOME"}}
                />
                <Stack.Screen
                    name="SignInPage"
                    component={SignIn}
                    option={{title:"SIGN IN"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}