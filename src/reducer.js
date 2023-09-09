
export const reducer = (state, action) => {
    if (action.type === "TOGGLEDROPDOWN") {
        return {
            ...state,
            isDropdownShowing: !state.isDropdownShowing
        }
    }

    if (action.type === "CLOSEDROPDOWN") {
        return {
            ...state,
            isDropdownShowing: false
        }
    }

    if (action.type === "SETPRODUCTS") {
        return {
            ...state,
            products: action.products
        }
    }

     if (action.type === "SETFEATUREDPRODUCTS") {
        return {
            ...state,
            featuredProducts: action.products
        }
    }

    if (action.type === "SETISLOADING") {
        return {
            ...state, 
            isLoading: true,
        }
    }

    if (action.type === "REMOVEISLOADING") {
        return {
            ...state,
            isLoading: false
        }
    }

    if (action.type === "SETSINGLEPRODCT") {
        return {
            ...state,
            singleProduct: action.product
        }
    }

    if (action.type === "ADDTOCART") {
        const item = [...state.cart];
        item.push(action.item)
        localStorage.setItem("cart", JSON.stringify(item))
        return {
            ...state,
            cart: item
        }
    }

    if (action.type === "DELETEFROMCART") {
        const item = state.cart.filter((item) => item.id !== action.id)
         localStorage.setItem("cart", JSON.stringify(item))
        return {
            ...state,
            cart: item
        }
    }

    if (action.type === "CLEARCART") {
        const item = [];
        localStorage.setItem("cart", JSON.stringify(item));
        return {
            ...state, 
            cart: item
        }
    }

    if (action.type === "UPDATECART") {
        const subtotal = action.subtotal;
        const shipping = action.subtotal > 0 ? 9.99 : 0;
        const tax = action.subtotal / 10;
        const totalCost = subtotal + shipping + tax
        return {
            ...state,
            orderSummary: {
                subtotal: subtotal,
                shipping: shipping,
                tax: tax,
                totalCost: totalCost,
            }
        }
    }

    if (action.type === "INCREASEQUANTITY") {
        const updatedItem = {
            ...action.existingItem,
            quantity:  action.existingItem.quantity + action.item.quantity
        }
        const item = [ updatedItem]
        localStorage.setItem("cart", JSON.stringify(item))
        return {
            ...state,
            cart: item
        }
    }

    if (action.type === "SETLOCALSTORAGEASEMPTY") {
        return {
            ...state,
            cart: []
        }
    }

    if (action.type === "SETLOCALSTORAGE") {
        return {
            ...state,
            cart: JSON.parse(action.cart)
        }
    }

    
 
    return state
}