import { css } from "@emotion/css";
import React from "react";

function Footer() {
  const styles = css({
    "&": {
      backgroundColor: "#ededed",
      textAlign: "center",
      fontSize: "x-large",
      padding: "10px",
    },
  });
  return (
    <>
      <div className={`footer ${styles}`}>Footer</div>
    </>
  );
}

export default Footer;
