import { createContext, useContext, useEffect, useReducer } from "react";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { reducer } from "./reducer";
import axios from 'axios';


const AppContex = createContext()

const intialState = {
    isLoading: false,
    isDropdownShowing: false,
    products: [],
    featuredProducts: [],
    singleProduct: {},
    cart: []
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

     const toggleDropdown = () => {
        dispatch({type: "TOGGLEDROPDOWN"})
    }
    
    const closeDropdown = () => {
        dispatch({type: "CLOSEDROPDOWN"})
    }

    const callProducts = async () => {
        dispatch({type: "SETISLOADING"})
        const response = await fetch(`https://fakestoreapi.com/products/`);
        const data = await response.json();
        dispatch({ type: "SETPRODUCTS", products: data });
        dispatch({type: "REMOVEISLOADING"})
    }

    const callFeaturedProducts = async () => {
        dispatch({type: "SETISLOADING"})
        const response =  await axios.get("https://fakestoreapi.com/products/?limit=3");
        const { data } = response;
        dispatch({ type: "SETFEATUREDPRODUCTS", products: data });
        dispatch({type: "REMOVEISLOADING"})
    }

    const callSingleProduct = async (id) => {
        dispatch({ type: "SETISLOADING" })
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        const { data } = response;
        dispatch({ type: "SETSINGLEPRODCT", product: data });
        dispatch({ type: "REMOVEISLOADING" });
    }

    const addToCart = (item) => {

        const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            dispatch({ type: "INCREASEQUANTITY", item, existingItem });
        } else {
            dispatch({ type: "ADDTOCART", item });
        }

        toast.success('Item added to cart sucessfully', {
         position: toast.POSITION.TOP_CENTER
        });
    }

    const deleteItemFromCart = (id) => {
        dispatch({ type: "DELETEFROMCART", id })
        
          toast.error('Item deleted from cart sucessfully', {
         position: toast.POSITION.TOP_CENTER
        });
    }

    const setUpCartFromLocalStorage = () => {
        const cart = localStorage.getItem("cart")
        if (!cart) {
           dispatch({type: "SETLOCALSTORAGEASEMPTY"})
        } else {
            dispatch({type: "SETLOCALSTORAGE", cart})
       }
    } 



    useEffect(() => {
        callProducts(10)
        setUpCartFromLocalStorage()
    }, [])

    return (
        <AppContex.Provider value={{
            state,
            toggleDropdown,
            closeDropdown,
            callProducts,
            callSingleProduct,
            addToCart,
            callFeaturedProducts,
            deleteItemFromCart
        }}>
            {children}
        </AppContex.Provider>
    )
}

export { AppProvider, AppContex }

export const useGlobalContext = () => {
    return useContext(AppContex)
}