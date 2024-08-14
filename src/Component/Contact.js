import React from "react";
import Profile1 from "../images/people/1.png";
import Profile2 from "../images/people/2.png";
import Profile3 from "../images/people/3.png"

import "./CSS/Contact.css";

const Contact = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#Let's__talk</h2>
        <p>LEAVE A MESSAGE. We love to hear from you!...</p>
      </section>
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>get in touch</span>
          <h2>Visit one of our agency locations or contact us today</h2>
          <h3>Head office</h3>
          <div>
            <li>
              <i class="fa-solid fa-map"></i>
              <p>Thiruverkadu , Chennai, Tamil Nadu 600077</p>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <p>preethi.r@gmail.com</p>
            </li>
            <li>
              <i class="fa-solid fa-phone"></i>
              <p>+91 123 451 6789</p>
            </li>
            <li>
              <i class="fa-solid fa-clock"></i>
              <p>para4</p>
            </li>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40087.76874977493!2d80.10834299130389!3d13.075693344739248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52618c4334be13%3A0x95772effb993e076!2sThiruverkadu%2C%20Chennai%2C%20Tamil%20Nadu%20600077!5e0!3m2!1sen!2sin!4v1723302204993!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <section className="form-details section-p1" >
        <form action="">
          <span>leave a message</span>
          <h2>we love to hear from you</h2>
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="Type Your E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
          ></textarea>
          <button className="normal">Submit</button>
        </form> 
        <div className="people">
          <div>
          <img src={Profile1} alt=""/>
          <p><span>Kaviya</span> Digital Marketing <br></br> Phone: + 000 123 8909<br></br>Email: preethi@gmail.com</p>
          </div>
          <div>
          <img src={Profile2} alt=""/>
          <p><span>Kaviya</span> Digital Marketing <br></br> Phone: + 000 123 8909<br></br>Email: preethi@gmail.com</p>
          </div>
          <div>
          <img src={Profile3} alt=""/>
          <p><span>Kaviya</span> Digital Marketing <br></br> Phone: + 000 123 8909<br></br>Email: preethi@gmail.com</p>
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

export default Contact;
