import { useGlobalContext } from "../Context";
import { useNavigate } from "react-router";

import "./Cart.css"

const Cart = () => {
    let subtotal = 0;
    const { state, deleteItemFromCart } = useGlobalContext();
    
    const navigate = useNavigate()

    const proceedToCart = () => {
        navigate("/checkout")
    }

    const disable = state.cart.length === 0 ? true : false;

    state.cart.forEach(element => {
        let elementsubtotal = element.quantity * element.price;
        subtotal += elementsubtotal;
        return subtotal
    });

    const tax = subtotal / 10;
    const shipping = 9.99;
    const orderTotal = tax + shipping + subtotal;

    
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
                    <div>
                        <p>subtotal</p>
                        <p>${ subtotal.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>shipping</p>
                        <p>${ shipping.toFixed(2)}</p>
                    </div>
                    <div>
                        <p>tax</p>
                        <p>${ subtotal.toFixed(2) }</p>
                    </div>
                    <div>
                        <p>order total</p>
                        <p>${ orderTotal.toFixed(2)}</p>
                    </div>
                    <button disabled={disable} onClick={proceedToCart}>proceed to checkout</button>
                </div>  
            </div>
        </section>
    )
}

export default Cart