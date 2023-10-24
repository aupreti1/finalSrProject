import {useState} from "react";
import ProjectNavigation from "./components/Navigation.js";
import {AuthContext} from "./components/Authentication.js";


export default function App() {
  const [hasUser, setUser] = useState(false);

  return (
    <AuthContext.Provider value={{hasUser, setUser}}>
      <ProjectNavigation/>
    </AuthContext.Provider>
  );
}