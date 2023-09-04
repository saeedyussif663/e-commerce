
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
 
    return state
}