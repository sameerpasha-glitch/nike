/** @format */

import React from "react";
import "./Navb.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul className="logo">
        <svg
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="swoosh-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="22"
          viewBox="0 0 64 22"
          fill="none">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.7277 12.1511C15.999 12.598 14.4241 12.8196 13.0469 12.8196C11.3396 12.8196 9.94617 12.4728 8.97074 11.7793C4.02962 8.28845 8.54956 0.885548 9.06118 0.0629324C6.88551 2.37923 4.65235 4.80341 2.89851 7.44593C-0.0575023 11.9597 -0.812655 16.2475 0.910825 18.906C2.23896 20.9642 4.40042 22 7.37517 22C10.0146 22 13.2975 21.1832 17.1928 19.5559L64 0.0173385L63.9981 0L17.7277 12.1511Z"
            fill="#111111"></path>
        </svg>
      </ul>
      <ul
        style={{
          display: "flex",
          gap: "15px",
          fontWeight: "bold",
          marginLeft: "15rem",
          textAlign: "center",
          fontFamily: "arial",
          alignItems: "center",
        }}>
        <li className="new-cont">
          New & Feature
          <div className="new-li">
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Featured</h4>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
              <li>SNKRS Lanch Calendar</li>
              <li>Members Exclusive</li>
              <li>Customise By Nike with You</li>
              <li>Whats Trending</li>
            </ul>
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop Icons</h4>
              <li>Air Forcd 1</li>
              <li>Air Jordan 1</li>
              <li>Air Max</li>
              <li>Dunk</li>
              <li>Cortez</li>
              <li>Blazers</li>
              <li>Pegasas</li>
              <li>Volmero</li>
            </ul>
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop By Sport</h4>
              <li>Running</li>
              <li>Basketaball</li>
              <li>FootBall</li>
              <li>Golf</li>
              <li>Tennis</li>
              <li>Gym & Training</li>
              <li>Yoga</li>
              <li>Skating</li>
            </ul>
          </div>
        </li>
        <li className="new-cont">
          Men
          <div className="new-li">
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop Men</h4>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Shoes</li>
              <li>Accessories</li>
            </ul>
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop By Sport</h4>
              <li>Running</li>
              <li>Basketball</li>
              <li>Football</li>
              <li>Training</li>
            </ul>
          </div>
        </li>

        <li className="new-cont">
          Women
          <div className="new-li">
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop Women</h4>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Shoes</li>
              <li>Accessories</li>
            </ul>
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop By Sport</h4>
              <li>Running</li>
              <li>Yoga</li>
              <li>Tennis</li>
              <li>Training</li>
            </ul>
          </div>
        </li>

        <li className="new-cont">
          Kids
          <div className="new-li">
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Shop Kids</h4>
              <li>Boys</li>
              <li>Girls</li>
              <li>Shoes</li>
              <li>Clothing</li>
            </ul>
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Featured</h4>
              <li>New Arrivals</li>
              <li>Best Sellers</li>
            </ul>
          </div>
        </li>

        <li className="new-cont">
          Sale
          <div className="new-li">
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Men's Sale</h4>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Shoes</li>
            </ul>
            <ul>
              <h4 style={{ textDecoration: "underline" }}>Women's Sale</h4>
              <li>Tops</li>
              <li>Bottoms</li>
              <li>Shoes</li>
            </ul>
          </div>
        </li>
      </ul>

      <ul style={{ display: "flex", marginRight: "5rem" }}>
        <svg
          style={{
            marginRight: "10px",
            position: "relative",
            top: "8px",
            left: "190px",
          }}
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          role="img"
          width="24"
          height="24"
          fill="none">
          <path
            stroke="#111111"
            stroke-width="1.5px"
            d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
            fill="none"></path>
        </svg>
        <input
          type="Search"
          name=""
          id=""
          placeholder="Search"
          style={{
            width: "12rem",
            borderRadius: "50px",
            padding: "10px",
            backgroundColor: "rgb(244, 244, 244)",
            borderStyle: "none",
          }}
        />
        <button>
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24"
            height="24"
            fill="none">
            <path
              stroke="#111111"
              stroke-width="1.5px"
              d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 010 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 010-7.007A4.923 4.923 0 017.205 3.75c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 013.504-1.451"
              fill="none"></path>
          </svg>{" "}
        </button>
        <button>
          <svg
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            width="24"
            height="24"
            fill="none">
            <path
              stroke="#111111"
              stroke-width="1.5px"
              d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"
              fill="none"></path>
          </svg>{" "}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
