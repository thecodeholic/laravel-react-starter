import {createContext, useContext, useState} from "react";

const StateContext = createContext({
  currentUser: null,
  token: null
})

export const ContextProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

  const setToken = (token) => {
    _setToken(token)
    localStorage.setItem('ACCESS_TOKEN', token);
  }

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
