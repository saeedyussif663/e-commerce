import { createContext, useContext, useReducer } from "react";

import { reducer } from "./reducer";

const AppContex = createContext()

const intialState = {
    isDropdownShowing: false,
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

     const toggleDropdown = () => {
        dispatch({type: "TOGGLEDROPDOWN"})
    }
    
    const closeDropdown = () => {
        dispatch({type: "CLOSEDROPDOWN"})
    }

    return (
        <AppContex.Provider value={{
            state,
            toggleDropdown,
            closeDropdown
        }}>
            {children}
        </AppContex.Provider>
    )
}

export { AppProvider, AppContex }

export const useGlobalContext = () => {
    return useContext(AppContex)
}