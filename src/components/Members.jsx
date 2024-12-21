/** @format */

import React from "react";
import "./classic.css";

const Members = () => {
  return (
    <div style={{ marginTop: "4rem" }}>
      <h2
        style={{
          textAlign: "left",
          marginLeft: "4rem",
          fontSize: "2rem",
          fontWeight: "lighter",
        }}>
        Member Benefits
      </h2>
      <section className="slider">
        <img
          style={{ position: "fixed" }}
          className="members"
          src="./public/Images/nike-just-do-it (9).jpeg"
          alt="Member Product"
          width={"400px"}
        />

        <img
          className="members"
          src="./public/Images/nike-just-do-it (13).jpg"
          alt=""
          width={"400px"}
        />
        <img
          className="members"
          src=".\public\Images\nike-just-do-it (12).jpg"
          alt=""
          width={"400px"}
        />
        <img
          className="members"
          src=".\public\Images\nike-just-do-it (11).jpg"
          alt=""
          width={"400px"}
        />
        <img
          className="members"
          src=".\public\Images\nike-just-do-it (10).jpg"
          alt=""
          width={"400px"}
        />
        <img
          className="members"
          src=".\public\Images\nike-just-do-it.png"
          alt=""
          width={"400px"}
        />
      </section>
    </div>
  );
};

export default Members;
