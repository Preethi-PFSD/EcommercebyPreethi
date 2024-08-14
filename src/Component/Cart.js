import React from "react";
import ProductF1 from "../images/products/f1.jpg";
import productF2 from "../images/products/f2.jpg";
import productF3 from "../images/products/f3.jpg";
import productF4 from "../images/products/f4.jpg";

import "./CSS/Cart.css";

import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Let's__talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!...</p>
      </section>
      <section id="cart" className="section-p1">
        <table>
          <thead>
            <tr>
              <td>Remove</td>
              <td>Image</td>
              <td>Products</td>
              <td>price</td>
              <td>Quantity</td>
              <td>subtotoal</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link to={"/"}>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
              <td>
                <img src={ProductF1} alt="" />
              </td>
              <td>Cartoon Astorant </td>
              <td>$118.19</td>
              <td>
                <input type="number" id="number" />
              </td>
              <td>$98.19</td>
            </tr>
            <tr>
              <td>
                <Link to={"/"}>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
              <td>
                <img src={productF3} alt="" />
              </td>
              <td>Korean shirt viscose rayon</td>
              <td>$118.19</td>
              <td>
                <input type="number" id="number" />
              </td>
              <td>$114.199</td>
            </tr>
            <tr>
              <td>
                <Link to={"/"}>
                  <i class="fa-solid fa-trash"></i>
                </Link>
              </td>
              <td>
                <img src={productF2} alt="" />
              </td>
              <td>Casual Linen Shirt</td>
              <td>$560.00</td>
              <td>
                <input type="number" id="number" />
              </td>
              <td>$118.19</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="cart-add" className="section-p1">
        <div className="coupon">
          <h3>Apply Coupon</h3>
          <div>
            <input type="text"id="couponId"  placeholder="Type Your Coupon" />
            <button className="normal">Apply</button>
          </div>
        </div>
        <div className="subTotal">
          <h3>Cart Totals</h3>
          <table>
            <tr>
              <td>Cart Subtotal</td>
              <td>$335</td>
            </tr>

            <tr>
              <td>Shipping</td>
              <td>Free</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td>
                <strong>$335</strong>
              </td>
            </tr>
          </table>
          <button className="normal">Proceed to checkout</button>
        </div>
      </section>
    </>
  );
};
export default Cart;
