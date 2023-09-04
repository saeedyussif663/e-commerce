import { useGlobalContext } from "../Context"
import { useNavigate } from "react-router";

import "./Home.css"
import { useEffect } from "react";
import Products from "./Products";

const Home = () => {
    const navigate = useNavigate()
    const { closeDropdown, state, callProducts } = useGlobalContext();

    
    useEffect(() => {
        callProducts(3);
    }, [])


    const navigateToProduct = () => {
        navigate('/product')
    }
 
    
    return (
        <main>
            <section className="home-section" onClick={closeDropdown}>
                <div className="description-section">
                 <h1>We are changing the way people shop</h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
                    </p>
                    <div className="home-button-container"> 
                        <button onClick={navigateToProduct}>Our products</button>
                    </div>
                </div>
                <div className="image-section">
                    <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="moniter"/>
                </div>
            </section>
            <section className="featured-section">
                <h1>Featured Products</h1>
                <div className="underline"></div>
                <div className="product-section" >
                    {state.featuredProducts.map((product) => {
                        return <h1>{ product.title}</h1>
                    })}
                </div>
            </section>
        </main>
    )
}


export default Home