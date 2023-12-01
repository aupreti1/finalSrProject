//Import the create context hook from react
import { createContext } from "react";

//EXPORT the AuthContext we created for Authentication
export const AuthContext = createContext({
    //CREATE has user and set to false
    hasUser: false,
    //CREATE setUser function to set hasUser
    setUser: () => { }
    //END AuthContext object
});