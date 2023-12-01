//Import useState from react
import { useState } from "react";
//Import Navigation component from Navigation file
import ProjectNavigation from "./components/Navigation.js";
//Import AuthContext hook from Authentication file
import { AuthContext } from "./components/Authentication.js";

//CREATE app function 
export default function App() {
  //CREATE the user state for if user exists
  const [hasUser, setUser] = useState(false);

  //RETURN content
  return (
    //Provide the values for hasUser and setUser to the entire application
    <AuthContext.Provider value={{ hasUser, setUser }}>
      {/* Call Navigation Component */}
      <ProjectNavigation />
      {/* END the AuthContext.Provider Component */}
    </AuthContext.Provider>
    //END return
  );
  //END function 
}