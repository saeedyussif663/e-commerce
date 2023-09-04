import { createContext, useContext, useEffect, useReducer } from "react";

import { reducer } from "./reducer";

const AppContex = createContext()

const intialState = {
    isDropdownShowing: false,
    products: [],
    featuredProducts: []
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

     const toggleDropdown = () => {
        dispatch({type: "TOGGLEDROPDOWN"})
    }
    
    const closeDropdown = () => {
        dispatch({type: "CLOSEDROPDOWN"})
    }

    const callProducts = async (limit) => {
        const response = await fetch(`https://fakestoreapi.com/products/category/electronics?limit=${limit}`);
        const data = await response.json();
        if (limit === 3) {
            dispatch({type: "SETFEATUREDPRODUCTS", products: data})
        }
        dispatch({type: "SETPRODUCTS", products: data})
    }



    useEffect(() => {
        callProducts(10)
    }, [])

    return (
        <AppContex.Provider value={{
            state,
            toggleDropdown,
            closeDropdown,
            callProducts
        }}>
            {children}
        </AppContex.Provider>
    )
}

export { AppProvider, AppContex }

export const useGlobalContext = () => {
    return useContext(AppContex)
}