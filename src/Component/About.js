import React from 'react';
import Abouta6 from "../images/about/a6.jpg";
import VideoMp4 from "../images/about/1.mp4";

import FeatureF1 from "../images/features/f1.png";
import FeatureF2 from "../images/features/f2.png";
import FeatureF3 from "../images/features/f3.png";
import FeatureF4 from "../images/features/f4.png";
import FeatureF5 from "../images/features/f5.png";
import FeatureF6 from "../images/features/f6.png";
import "./CSS/About.css";

const  About= ()=> {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#KnowUs</h2>
        <p>Lorem ipsum dolor sit amet!. consectetur</p>
      </section>
      <section id='about-head' className='section-p1'>
        <img src={Abouta6} alt=''/>
        <div>
          <h2>Who We Are ?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati pariatur eius consequatur. Doloribus perferendis, nobis consectetur non voluptate voluptatem mollitia repellat aliquid eveniet est tempore laborum dolorum ex obcaecati iure.</p>

        <abbr title=''>Create Stunning images with as much or as little control as you like thanks to a choice of basic and creative modes .</abbr>
        <br></br><br></br>
        <marquee  bgcolor="#ccc" width="100%"  direction="left" scrollamount="5" loop="-1">Create Stunning images with as much or as little control as you like thanks to a choice of basic and creative modes . </marquee>
        </div>
      </section>
      <section id='about-app' className='section-p1'>
        <h1>Download our <a href='#'>app</a></h1>
        <div className='video'>
          <video autoPlay loop muted src={VideoMp4} className='video'></video>
        </div>
      </section>
      <section id="feature" className="section-p1">
        <div className="fe-box">
          <img src={FeatureF1} alt="" />
          <h6>Free Shipping </h6>
        </div>
        <div className="fe-box">
          <img src={FeatureF2} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="fe-box">
          <img src={FeatureF3} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="fe-box">
          <img src={FeatureF4} alt="" />
          <h6>Promotion</h6>
        </div>
        <div className="fe-box">
          <img src={FeatureF5} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="fe-box">
          <img src={FeatureF6} alt="" />
          <h6>P24/7 Support</h6>
        </div>
      </section>
    </>
  )
}

export default About;
