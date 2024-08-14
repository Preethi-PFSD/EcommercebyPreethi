import React, { useState } from "react";
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
import "./CSS/Sproduct.css";

const Sproduct = () => {
  const [Images,setMainImg] = useState(ProductF1);
  const smallImages = [
    productF2,
    productF3,
    productF4,
    productF5
  ]
  const mainImage ={
    width: "100%"
  }
  return (
    <>
      <section id="prodetails" className="section-p1">
        <div className="single-pro-image">
          <img src={Images} alt="" style={mainImage} id="main-img" />
          <div className="small-img-group">
            {smallImages.map((src , index)=>(
              <div className="small-img-col" key={index}>
                <img src={src} onClick={()=>setMainImg(src)} style={mainImage} className="small-img" alt=""/>
              </div>
                ))};
              {/* <div className="small-img-col">
                <img src={productF2} style={mainImage} className="small-img" alt=""/>
              </div>
              <div className="small-img-col">
                <img src={productF3} style={mainImage} className="small-img" alt=""/>
              </div>
              <div className="small-img-col">
                <img src={productF4} style={mainImage} className="small-img" alt=""/>
              </div> */}
              
          </div>
        </div>
        <div className="single-pro-details">
          <h6>Home / T-shirt </h6>
          <h4>Men's Fashion T Shirt</h4>
          <h2>$ 139.00</h2>
          <select>
            <option>
              Select Size
            </option>
            <option>
              XL
            </option>
            <option>
              XXL
            </option>
            <option>
             Medium
            </option>
            <option>
             Small
            </option>
          </select>
          <input type="number" value="1" />
          <button className="normal">Add to Cart</button>
          <h4>Product Details</h4>
          <span>Discover unparalleled comfort and style with the Preethi Premium Cotton T-Shirt. Crafted from 100% pure cotton, this t-shirt offers a soft, breathable fabric that ensures all-day comfort. Ideal for casual wear or layering, the Preethi T-Shirt combines timeless design with modern fashion. Made from 100% pure, high-quality cotton for a soft, breathable feel.</span>
        </div>
      </section>  
      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer collection new morden design</p>
        <div className="pro-container">
          <div className="pro">
            <img src={NewArrivals1} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={NewArrivals2} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={NewArrivals3} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
          <div className="pro">
            <img src={NewArrivals4} alt="" />
            <div className="des">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <a href="#">
              <i className="fal fa-shopping-cart cart"></i>
            </a>
          </div>
         
         
        
         
        </div>
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

export default Sproduct;
