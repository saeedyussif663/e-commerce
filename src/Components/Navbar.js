import { Link, NavLink } from "react-router-dom"

import  "./Navbar.css"

const Navbar = () => {
    return (
        <nav>
           <div className="max-container">
            <div className="logo-container">
                <Link to="/">SY</Link>
            </div>
            <div className="links-container">
                <NavLink to='/' activeclassname="active">Home</NavLink>
                <NavLink to='/about' activeclassname="active">About</NavLink>
                <NavLink to='/Products' activeclassname="active">Products</NavLink>
                <NavLink to='/cart' activeclassname="active">Cart</NavLink>
            </div>
            <div className="cart-container">
                <NavLink to="/cart">
                    <i className="fa-solid fa-cart-shopping"></i>
                 </NavLink> 
                <p>0</p>
            </div>
          </div>
        </nav>
    )
}

export default Navbar