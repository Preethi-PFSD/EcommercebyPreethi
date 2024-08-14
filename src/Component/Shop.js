import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductF1 from "../images/products/f1.jpg";
import productF2 from "../images/products/f2.jpg";
import productF3 from "../images/products/f3.jpg";
import productF4 from "../images/products/f4.jpg";
import productF5 from "../images/products/f5.jpg";
import productF6 from "../images/products/f6.jpg";
import productF7 from "../images/products/f7.jpg";
import productF8 from "../images/products/f8.jpg";
import NewArrivals1 from "../images/products/n1.jpg";
import NewArrivals2 from "../images/products/n2.jpg";
import NewArrivals3 from "../images/products/n3.jpg";
import NewArrivals4 from "../images/products/n4.jpg";
import NewArrivals5 from "../images/products/n5.jpg";
import NewArrivals6 from "../images/products/n6.jpg";
import NewArrivals7 from "../images/products/n7.jpg";
import NewArrivals8 from "../images/products/n8.jpg";
import "./CSS/Shop.css";
import ProductData from "./Data/ProductData";

const Shop = () => {
  //  const [ProData , setProData] = useState(ProductData);

  return (
    <>
      <section id="page-header">
        <h2>#stayhome</h2>
        <p>save more with coupons & up to 70% off!</p>
      </section>
      {/* fetch data from json  */}
      <section id="product1" className="section-p1">
        <div className="pro-container">
          {ProductData.map((product, index) => {
           return(
            <div className="pro" key={index}>
               {
              console.log("ProductName:", product.name , "index:", index, "images:", product.images[0])
            }
              <img  src={require(`../images/products/${product.images[0]}`)} alt={product.name} />
              <div className="des">
                <span>{product.brand}</span>
                <h5>{product.name}</h5>
                <div className="star">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <h4>{product.price}</h4>
              </div>
              <a href="">
                <i className="fal fa-shopping-cart cart"></i>
              </a>
            </div>
           )
          })}
        </div>
      </section>

      <section id="pagination" className="section-p1">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">
          <i class="fal fa-long-arrow-alt-right"></i>
        </a>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up for Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and{" "}
            <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Type your Email" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default Shop;
