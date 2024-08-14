import React from "react";
import Logo from "./images/logo.png";
import App from "./images/pay/app.jpg";
import Pay from "./images/pay/pay.png";
import Play from "./images/pay/play.jpg";
import "./App.css";

function Footer () {
  return (
    <div className="section-p1 footer">
      <div className="col">
        <img src={Logo} className="logo" alt="Logo" />
        <h4>Contact</h4>
        <p>
          <strong>Address :</strong> VGN 5th Street Mahalakshmi Nagar ,<br />
          Vadanoompal Road , Thiruverkadu ,<br /> chennai-6000777
        </p>
        <p>
          <strong>Phone:</strong> +91 9488300654
        </p>
        <p>
          <strong>Hours: </strong> 10:00 - 18:00 Mon - Sat
        </p>
        <div className="follow">
          <h4>Follow us</h4>
          <div className="icon">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
      </div>

      <div className="col install">
        <h4>Install App</h4>
        <p>From App Store or Google Play</p>
        <div className="row ">
          <img src={App} className="grid gap-3" alt="App Store" />
          <img src={Play} alt="Google Play" />
        </div>
        <p>Secured Payment Gateways</p>
        <img src={Pay} alt="Payment Gateways" />
      </div>

      <div className="copyright">
        <p>© 2024 - 2025, PreethiSoftTech</p>
      </div>
    </div>
  );
};

export default Footer;
