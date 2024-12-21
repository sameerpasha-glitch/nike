/** @format */

import React from "react";
import "./classic.css";

const Sport = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <h2
        style={{
          textAlign: "left",
          marginLeft: "4rem",
          fontSize: "2rem",
          fontWeight: "lighter",
        }}>
        Shop By Sport
      </h2>
      <div className="slider">
        {[
          "nike-just-do-it (9).jpg",
          "nike-just-do-it (8).jpg",
          "nike-just-do-it (7).jpg",
          "nike-just-do-it (3).jpg",
          "nike-just-do-it (4).jpg",
          "nike-just-do-it (5).jpg",
          "nike-just-do-it (6).jpg",
        ].map((image, index) => (
          <div key={index} className="image-container">
            <img
              className="sport"
              src={`./public/Images/${image}`}
              alt=""
              width={"460px"}
            />
            <button className="shop-button">Shop</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sport;
