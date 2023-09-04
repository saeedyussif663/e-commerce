import { createContext, useContext } from "react";

const AppContex = createContext()


const AppProvider = ({ children }) => {
    return (
        <AppContex.Provider value={"hello"}>
            {children}
        </AppContex.Provider>
    )
}

export { AppProvider, AppContex }

export const useGlobalContext = () => {
    return useContext(AppContex)
}