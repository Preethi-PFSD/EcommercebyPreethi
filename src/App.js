import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./Header.js";
import Home from "./Component/Home.js";
import Blog from "./Component/Blog.js";
import Contact from "./Component/Contact.js";
import About from "./Component/About.js";
import Shop from "./Component/Shop.js";
import SProduct from "./Component/SProduct.js";
import Cart from "./Component/Cart.js";
import Footer from "./Footer.js";



const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element ={<Blog/>}/>
        <Route path="/shop" element ={<Shop/>}/>
        <Route path="/sproduct" element ={<SProduct/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
