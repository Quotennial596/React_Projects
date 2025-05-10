import React from "react";
import UserContext from "./usercontext";

const UserContextProvider = ({children}) => {

    const [user, setUser] = React.useState({name: "John"});

    return (
        <UserContext.Provider value={{setUser, user}}>
            {children}
        </UserContext.Provider>
    )   
}

export default UserContextProvider;