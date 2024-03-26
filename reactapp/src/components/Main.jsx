import React from "react";

import { css } from "@emotion/css";

function Main() {
  const styles = css({
    "&": {
      display: "flex",
      height: "100vh",
    },
    "& .menu": {
      display: "block",
      width: "300px",
      borderRadius: "10px",
      borderRight: "2px solid #ededed",
    },
    "& ul": {
      listStyleType: "none",
    },
    "& ul li": {
      margin: "70px",
    },
    "& ul li a": {
      textDecoration: "none",
      color: "black",
      fontSize: "x-large",
    },
    "& .menucontent": {
      margin: "20px",
      padding: "5px",
      borderRadius: "10px",
    },
    "& .content": {
      display: "block",
      border: "2px solid #ededed",
      borderRadius: "5px",
      padding: "20px",
      margin: "5px",
    },
  });
  return (
    <>
      <div className={`container ${styles}`}>
        <div className="menu">
          <ul>
            <li>
              <a href="">Dashboard</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">Resources</a>
            </li>
          </ul>
        </div>
        <div className="menucontent">
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisi
              eaque ratione optio, eius repudiandae. Aut eum blanditiis sequi
              quibusdam!
            </p>
          </div>
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
              praesentium! Repellendus provident aperiam, fugit minima ab
              nesciunt sapiente. Ipsam, veritatis?
            </p>
          </div>
          <div className="content">
            <h2>Lorem, ipsum.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              quas sed consequatur? Magnam placeat amet deleniti in omnis aut
              fugit.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
