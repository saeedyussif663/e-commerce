import { useGlobalContext } from "../Context"
import Loader from "./Loader"
import Product from "./Product"

import "./Products.css"

const Products = () => { 
    const {state} = useGlobalContext()

    if (state.isLoading) return <Loader/>
    return (
        <section className="products-section-container">
            <h3>{state.products.length} products</h3>
            <div className="underline"></div>
                 <div className="products-section" >
                    {state.products.map((product) => {
                        return <Product key={ product.id} {...product} />
                    })}
                </div>
       </section>
    )
}

export default Products