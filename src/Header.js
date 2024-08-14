import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./images/logo.png";
import "./App.css";

const Header = () => {
  const location = useLocation();
  return (
    <div id="header">
      <Link to={"/"}>
        <img src={Logo} className="logo" alt="" />
      </Link>
      <div>
        <ul id="navbar">
          <li>
            <Link
              to={"/"}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/shop"}
              className={location.pathname === "/shop" ? "active" : ""}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to={"/blog"}
              className={location.pathname === "/blog" ? "active" : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className={location.pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className={location.pathname === "/contact" ? "active" : ""}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to={"/cart"}
              className={location.pathname === "/cart" ? "active" : ""}
            >
              <i className="fa-solid fa-bag-shopping"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div id="mobile">
        <Link
          to={"/cart"}
          className={location.pathname === "/cart" ? "active" : ""}
        >
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </div>
  );
};

export default Header;
