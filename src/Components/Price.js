import { useGlobalContext } from "../Context"

import "./Price.css"

const Price = () => {
    const {state} = useGlobalContext()

    let subtotal = 0;

      state.cart.forEach(element => {
        let elementsubtotal = element.quantity * element.price;
        subtotal += elementsubtotal;
        return subtotal
    });

    const tax = subtotal / 10;
    const shipping = 9.99;
    const orderTotal = tax + shipping + subtotal;

    return (
        <div className="price-container">
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
        </div>
    )
}

export default Price