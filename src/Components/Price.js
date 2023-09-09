import { useGlobalContext } from "../Context"

import "./Price.css"

const Price = () => {
    const {state} = useGlobalContext()
    const {subtotal, shipping, tax, totalCost} = state.orderSummary

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
                        <p>${ tax.toFixed(2) }</p>
                    </div>
                    <div>
                        <p>order total</p>
                        <p>${ totalCost.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Price