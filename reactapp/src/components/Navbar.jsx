import { css } from "@emotion/css";
// import React from "react";

function Navbar() {
  const styles = css({
    "&": {
      backgroundColor: "#ededed",
      overflow: "hidden",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      alignItems: "center",
    },
    "& .logo": {
      padding: "5px",
      paddingLeft: "40px",
    },
    "& .logo img": {
      height: "50px",
      width: "50px",
    },
    "& .pagelinks": {
      paddingRight: "40px",
    },
    "& .pagelinks ul": {
      listStyleType: "none",
      margin: "0",
      padding: "0",
    },
    "& .pagelinks ul li": {
      float: "left",
    },
    "& .pagelinks ul li a": {
      color: "black",
      textAlign: "center",
      padding: "14px 16px",
      textDecoration: "none",
    },
    "& .pagelinks ul li a:hover": {
      backgroundColor: "#555",
      color: "#ededed",
    },
  });

  const pageLinks = [
    { linkname: "Home", value: "/#" },
    { linkname: "Contents", value: "/#" },
    { linkname: "Products", value: "/#" },
    { linkname: "Contacts", value: "/#" },
  ];

  return (
    <>
      <div className={`navbar ${styles}`}>
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="pagelinks">
          <ul>
            {pageLinks.map((link, id) => (
              <li key={id}>
                <a href={link.value}>{link.linkname}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
