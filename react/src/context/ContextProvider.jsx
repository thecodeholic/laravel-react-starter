import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser: null,
    toten: null
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    );
}

export const useStateContext = () => useContext(StateContext);
