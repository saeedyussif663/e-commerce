import { Link, NavLink } from "react-router-dom"

import { useGlobalContext } from "../Context"

import  "./Navbar.css"


const Navbar = () => {
    const {state, toggleDropdown} = useGlobalContext()


    return (
        <nav>
           <div className="max-container">
            <div className="logo-container">
                <Link to="/">SY</Link>
            </div>
            <div className="menu-container">
                    <i className="fa-solid fa-bars" onClick={toggleDropdown}></i>
                <div className="dropdown-container" style={{display:  state.isDropdownShowing ? "flex" : "none"}}>
                <NavLink to='/' activeclassname="active" onClick={toggleDropdown}>Home</NavLink>
                <NavLink to='/about' activeclassname="active" onClick={toggleDropdown}>About</NavLink>
                <NavLink to='/Products' activeclassname="active" onClick={toggleDropdown}>Products</NavLink>
                <NavLink to='/cart' activeclassname="active" onClick={toggleDropdown}>Cart</NavLink>
            </div>
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
                <p>{state.cart.length }</p>
            </div>
          </div>
        </nav>
    )
}

export default Navbar