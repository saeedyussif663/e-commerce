import Price from "./Price";

import "./Checkout.css";
import { useRef } from "react";

import { useGlobalContext } from "../Context";


const Checkout = () => {

    const { orderProduct} = useGlobalContext();

    const nameRef = useRef("");
    const emailRef = useRef("");
    const addressRef = useRef("");

    const nameChangeHandler = (e) => {
        nameRef.current.value = e.target.value;
    }

     const emailChangeHandler = (e) => {
        emailRef.current.value = e.target.value;
    }

     const addressChangeHandler = (e) => {
        addressRef.current.value = e.target.value;
    }

    const submitForm = (e) => {
        e.preventDefault();
        const customerDetails = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value
        }
        nameRef.current.value = "";
        emailRef.current.value = "";
        addressRef.current.value = "";
        orderProduct(customerDetails);
    }



    return (
        <section className="checkout-container">
            <h2>Place Your Order</h2>
            <div className="shipping-information">
                <form onSubmit={submitForm}>
                    <h3>shipping information</h3>
                    <div>
                        <label htmlFor="name">First Name</label>
                        <input type="text" id="name" required
                            ref={nameRef} value={nameRef.current.value}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="e-mail">E-mail Address</label>
                        <input type="e-mail" id="e-mail" required
                            ref={emailRef} value={emailRef.current.value}
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div>
                        <label htmlFor="address">Pick-up Address</label>
                        <input type="text" id="address" required
                            ref={addressRef} value={addressRef.current.value} 
                            onChange={addressChangeHandler}
                        />
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