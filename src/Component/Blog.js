import React from "react";
import "./CSS/Blog.css";
import BlogB1 from "../images/blog/b1.jpg";
import BlogB2 from "../images/blog/b2.jpg";
import BlogB3 from "../images/blog/b3.jpg";
import BlogB4 from "../images/blog/b4.jpg";
import BlogB5 from "../images/blog/b5.jpg";

const Blog = () => {
  return (
    <>
      <section id="page-header" className="blog-header">
        <h2>#readmore</h2>
        <p>Read all case studies about our products!</p>
      </section>
      <section id="blog">
        <div className="blog-box">
          <div className="blog-img">
            <img src={BlogB1} alt="" />
          </div>
          <div className="blog-details">
            <h4>The cotton-Jersey Zip-up Hoodies</h4>
            <p>
              "Stand out from the crowd with our tie-dye t-shirt. Each piece
              features a unique swirl pattern created through a traditional
              tie-dye process. With its vibrant colors and relaxed fit, this tee
              is perfect for adding a splash of fun to your wardrobe."
            </p>
            <a href="">Continue reading</a>
          </div>
          <h1>15/06</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={BlogB2} alt="" />
          </div>
          <div className="blog-details">
            <h4>The cotton-Jersey Zip-up Hoodies</h4>
            <p>
            Elevate your everyday style with classic wardrobe staples that never go out of fashion. Our latest blog post highlights essential pieces that form the backbone of a versatile wardrobe, including tailored blazers, crisp white shirts, and the perfect pair of jeans.
            </p>
            <a href="">Continue reading</a>
          </div>
          <h1>12/10</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={BlogB3} alt="" />
          </div>

          <div className="blog-details">
            <h4>The cotton-Jersey Zip-up Hoodies</h4>
            <p>
            Discover the latest in eco-conscious fashion with our guide to sustainable clothing trends. From organic cotton basics to innovative recycled fabrics, we explore how modern designers are championing the environment without sacrificing style.
            </p>
            <a href="">Continue reading</a>
          </div>
          <h1>05/18</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={BlogB5} alt="" />
          </div>

          <div className="blog-details">
            <h4>The cotton-Jersey Zip-up Hoodies</h4>
            <p>
            Accessories can make or break an outfit, and our latest blog post is all about elevating your look with the right finishing touches. Explore the must-have accessories of the moment, including statement jewelry, stylish handbags, and trendy hats.
            </p>
            <a href="">Continue reading</a>
          </div>
          <h1>19/24</h1>
        </div>
        <div className="blog-box">
          <div className="blog-img">
            <img src={BlogB4} alt="" />
          </div>

          <div className="blog-details">
            <h4>The cotton-Jersey Zip-up Hoodies</h4>
            <p>
            As the leaves turn and temperatures drop, it's time to refresh your wardrobe with fall's hottest trends. Our seasonal style guide covers everything you need to stay chic this autumn, from cozy knitwear and rich, warm tones to stylish boots and layered looks.
            </p>
            <a href="">Continue reading</a>
          </div>
          <h1>11/90</h1>
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

export default Blog;
