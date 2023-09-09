import { Route, Routes } from "react-router";


import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import SingleProduct from "./Components/SingleProduct"
import Checkout from "./Components/Checkout";
import { ToastContainer } from "react-toastify";


function App() {


  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="checkout" element={<Checkout/>} />
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
