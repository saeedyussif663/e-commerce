import Price from "./Price";

import "./Checkout.css";


const Checkout = () => {
    return (
        <section className="checkout-container">
            <h2>Place Your Order</h2>
            <div className="shipping-information">
                <form>
                    <h3>shipping information</h3>
                    <div>
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="name"  required />
                    </div>
                    <div>
                        <label htmlFor="e-mail">E-mail Address</label>
                        <input type="e-mail"  id="e-mail" required />
                    </div>
                    <div>
                        <label htmlFor="address">Pick-up Address</label>
                        <input type="text" id="address" required />
                    </div>
                    
                    <button>Place Order</button>
                </form>
                <div className="total-price">
                    <Price />
                </div>
            </div>
            </section>
    )
}

export default Checkout