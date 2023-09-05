import { useParams } from "react-router";
import {Link} from "react-router-dom"

import { useGlobalContext } from "../Context";
import { useEffect , useState} from "react";

import Loader from "./Loader";

import "./SingleProduct.css";

const SingleProduct = () => {
    const { callSingleProduct, state, addToCart } = useGlobalContext();
    const { title, price, description, image } = state.singleProduct;

    const [ quantity, setQuantity] = useState("")

    const { id } = useParams();

    const handleAmountChange = (e) => {
        setQuantity(e.target.value)
    }

    const combineItemDetailsToObject = () => {
        if (!quantity) return 
        const item = {
            title,
            price,
            description,
            image,
            id,
            quantity: parseInt(quantity)
        }
        addToCart(item);
        setQuantity("")
    }

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
                <input type="number" min="1" max="20" placeholder="1" required
                      value={quantity}
                     onChange={handleAmountChange}
                />
                <button onClick={ combineItemDetailsToObject}>Add to cart</button>
            </div>
        </section>
    )
}

export default SingleProduct