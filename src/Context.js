import { createContext, useContext, useEffect, useReducer } from "react";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com';

import { reducer } from "./reducer";
import axios from 'axios';


const AppContex = createContext()

const intialState = {
    isLoading: false,
    isDropdownShowing: false,
    products: [],
    featuredProducts: [],
    singleProduct: {},
    cart: [],
    orderSummary: {
        subtotal: 0,
        shipping: 0,
        tax: 0,
        totalCost: 0
    }
}


const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, intialState);

    const  Pickupdate = () => {
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + 4);
        return futureDate;
    }

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

    const updateCartDetails = () => {
        
        let subtotal = 0;
        state.cart.forEach(element => {
        let elementsubtotal = element.quantity * element.price;
        subtotal += elementsubtotal;
        return subtotal
        });

        dispatch({ type: "UPDATECART", subtotal });
    }
    const timestamp = Pickupdate();
    const pickupdate = timestamp.toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            });
    const orderProduct = async (orderDetails) => {
    const emailResponse = await emailjs.send(
      'service_fdvi5bv',
      'template_jsw03li',
    {
        'receipient_email': orderDetails.email,
        'User Name': orderDetails.name, 
        'Total Amount': state.orderSummary.totalCost.toFixed(2),    
        'Pickup Address': orderDetails.address, 
        'Pickup Date': pickupdate, 
      },
      '4SvSClbtHgRa82Jel'
        );
        if (emailResponse.text === 'OK') { 
            window.location.href = '/';
            dispatch({ type: "CLEARCART" });

              toast.success('order successful, check e-mail for confirmation', {
                position: toast.POSITION.TOP_CENTER
                });
        } else {
                toast.error('order unsuccessful, try again later', {
            position: toast.POSITION.TOP_CENTER
            });
        }
    }

    useEffect(() => {
        updateCartDetails();
    }, [state.cart])


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
            deleteItemFromCart,
            orderProduct
        }}>
            {children}
        </AppContex.Provider>
    )
}

export { AppProvider, AppContex }

export const useGlobalContext = () => {
    return useContext(AppContex)
}