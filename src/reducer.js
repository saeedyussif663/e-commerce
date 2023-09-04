
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
 
    return state
}