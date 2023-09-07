import { useGlobalContext } from "../Context"

import "./Cart.css"

const Cart = () => {
    const { state, deleteItemFromCart} = useGlobalContext();


    return (
        <section className="cart-section-container">
            <h2>Shopping Cart</h2>
            <div className="underline"></div>
            <div className="items-total-container">
                <div className="cart-items">
                    {state.cart.map((item) => {
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
                        <p>$123.00</p>
                    </div>
                    <div>
                        <p>shipping</p>
                        <p>$5.00</p>
                    </div>
                    <div>
                        <p>tax</p>
                        <p>$100.00</p>
                    </div>
                    <div>
                        <p>order total</p>
                        <p>$3987.00</p>
                    </div>
                    <button>proceed to checkout</button>
                </div>  
            </div>
        </section>
    )
}

export default Cart