/** @format */

import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>Icons</h2>
          <li>Air Force 1</li>
          <li>Huararche</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>Shoes</h2>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>
            Clothing
          </h2>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirts & Tops</li>
        </ul>
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>Kids'</h2>
          <li>Infant & Todler Shoes</li>
          <li>Kid's Shoes</li>
          <li>Kid's Jordan Shoes</li>
          <li>Kid's Baseketball Shoes</li>
        </ul>
      </div>
      <p
        style={{
          border: "1px solid rgb(221, 216, 216)",
          marginTop: "1rem",
        }}></p>
      <div className="footer1">
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>
            Resources
          </h2>
          <li>Find a Store</li>
          <li>Become a Member</li>
          <li>Send us Feedback</li>
        </ul>
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>Help</h2>
          <li>Get Help</li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Option</li>
          <li>Contact us on Nike.com Inquiries</li>
          <li>Contact us On All Other Platforms</li>
        </ul>
        <ul>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "lighter" }}>Company</h2>
          <li>About Nike</li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainibility</li>
        </ul>
        <ul style={{ marginLeft: "8rem", marginTop: "1rem" }}>
          <button style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              class="css-npy3on"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="24"
              height="24"
              fill="none">
              <path
                stroke="#707072"
                stroke-miterlimit="10"
                stroke-width="1.5px"
                d="M21.75 12A9.75 9.75 0 0112 21.75M21.75 12A9.75 9.75 0 0012 2.25M21.75 12c0 2.071-4.365 3.75-9.75 3.75S2.25 14.071 2.25 12m19.5 0c0-2.071-4.365-3.75-9.75-3.75S2.25 9.929 2.25 12M12 21.75A9.75 9.75 0 012.25 12M12 21.75c2.9 0 5.25-4.365 5.25-9.75S14.9 2.25 12 2.25m0 19.5c-2.9 0-5.25-4.365-5.25-9.75S9.1 2.25 12 2.25M2.25 12A9.75 9.75 0 0112 2.25"
                fill="none"></path>
            </svg>
            India
          </button>
        </ul>
      </div>
      <div className="footer1">
        <ul
          style={{
            display: "flex",
            gap: "20px ",
          }}>
          <li>© 2024 Nike, Inc. All rights reserved</li>
          <li style={{ display: "flex" }} className=" guide-cont">
            Guides
            <svg
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="nds-summary-control"
              focusable="false"
              viewBox="0 0 24 24"
              role="img"
              width="20"
              height="20"
              fill="none">
              <path
                stroke="#111111"
                stroke-width="1.5px"
                d="M18.966 8.476L12 15.443 5.033 8.476"
                fill="none"></path>
            </svg>
            <ul className="guid-ul">
              <li className="guid-li">Nike React</li>
              <li className="guid-li">Nike Adapt</li>
              <li className="guid-li">Nike Air</li>
              <li className="guid-li">Nike Free</li>
              <li className="guid-li">Nike Joyride</li>
            </ul>
          </li>

          <li>Terms of Sale</li>
          <li>Terms of USe</li>
          <li>Nike Privacy Policy</li>
        </ul>
        <p style={{ marginBottom: "8rem" }}></p>
      </div>
    </>
  );
};

export default Footer;
