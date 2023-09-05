import { useParams } from "react-router";
import {Link} from "react-router-dom"

import { useGlobalContext } from "../Context";
import { useEffect } from "react";

import Loader from "./Loader";

import "./SingleProduct.css";

const SingleProduct = () => {
    const { callSingleProduct, state } = useGlobalContext();
    const {title, price, category, description, image} = state.singleProduct

    const { id } = useParams();

    useEffect(() => {
        callSingleProduct(id)
    }, [])

    if (state.isLoading) return <Loader/>

    return (
        <section className="singleProduct-container">
            <div className="img-section">
                <div className="singleProducts-links-container">
                    <Link to="/">Home</Link>
                    <span> &gt; </span>
                    <Link to="/products">Products</Link>
                </div>
                <div className="single-image-container">
                    <img src={image} alt={title} />
                </div>
            </div>
            <div className="single-details-container">
                <h1>{title}</h1>
                <p className="price">${price}</p>
                <p className="description"> {description}</p>
                <input type="number" min="1" max="20"  placeholder="1" required/>
                <button>Add to cart</button>
            </div>
        </section>
    )
}

export default SingleProduct