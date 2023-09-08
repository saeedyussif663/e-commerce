import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router";

import "./Cart.css"
import Price from "./Price";

const Cart = () => {
    let subtotal = 0;
    const { state, deleteItemFromCart } = useGlobalContext();
    
    const navigate = useNavigate()

    const proceedToCart = () => {
        navigate("/checkout")
    }

    const disable = state.cart.length === 0 ? true : false;


    
    return (
        <section className="cart-section-container">
            <h2>Shopping Cart</h2>
            <div className="underline"></div>
            <div className="items-total-container">
                <div className="cart-items">
                    {state.cart.length === 0 ? <h2>your cart is empty </h2> : state.cart.map((item) => {
                        return (
                            <div className="item-container" key={item.id}>
                                <i className="fa-solid fa-times" onClick={() => deleteItemFromCart(item.id)}></i>
                                <div className="cart-img-container">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="additional-information">
                                <h4>{item.title}</h4>
                                <p>quantity: {item.quantity}</p>
                                <p>price:  ${ item.price}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="total-price">
                <Price />
                 <button disabled={disable} onClick={proceedToCart}>proceed to checkout</button>
                </div>
                </div>  
        </section>
    )
}

export default Cart