import { useGlobalContext } from "../Context";

import { useNavigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const { state } = useGlobalContext();
    const navigate = useNavigate()

    if (state.cart.length === 0) {
        return navigate('/products');
    }

    return (
        children 
    )
}

export default ProtectedRoute