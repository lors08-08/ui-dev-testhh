import React from "react";
import Arrow from "../assets/Arrow.svg";

function Footer() {
  return (
    <div className="footer">
      <button>
        See more
        <img alt="icon" src={Arrow} />
      </button>
    </div>
  );
}

export default Footer;
