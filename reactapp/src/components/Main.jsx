// import React from "react";

import { css } from "@emotion/css";

function Main() {
  const styles = css({
    "&": {
      display: "flex",
      flexGrow: 1,
      // height: "100vh",
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

  const navLists = [
    { click: "Dashboard", value: "/#" },
    { click: "Products", value: "/#" },
    { click: "Resources", value: "/#" },
  ];

  const menuContent = [
    {
      h2: "Lorem, ipsum.",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisieaque ratione opteiusrepudiandae. Aut eum blanditiis sequiquibusdam!",
    },
    {
      h2: "Lorem, ipsum.",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisieaque ratione opteiusrepudiandae. Aut eum blanditiis sequiquibusdam!",
    },
    {
      h2: "Lorem, ipsum.",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nisieaque ratione opteiusrepudiandae. Aut eum blanditiis sequiquibusdam!",
    },
  ];
  return (
    <>
      <div className={`container ${styles}`}>
        <div className="menu">
          <ul>
            {navLists.map((list, id) => (
              <li key={id}>
                <a href={list.value}>{list.click}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="menucontent">
          {menuContent.map((content, id) => (
            <div key={id} className="content">
              <h2>{content.h2}</h2>
              <p>{content.p}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
