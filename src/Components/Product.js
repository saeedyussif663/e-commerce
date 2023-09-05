import { useNavigate } from "react-router";
import "./Product.css";

const Product = ({ image, title, price, id }) => {
    const navigate = useNavigate();

    const openSingleProduct = () => {
        navigate(`/products/${id}`)
    }

    return (
        <div className="product-container" onClick={openSingleProduct}>
               <div className="image-container">
                 <img src={image} alt={title} />
                </div>
                <div className="product-details">
                     <h1>{title.slice(0,15)}</h1>
                     <p>${ price}</p>
                 </div>
         </div>    
    )
}

export default Product