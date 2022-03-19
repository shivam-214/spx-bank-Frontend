import React from "react";
import ReactDOM from "react-dom";

const Footer = () => {
  const footerContent = (
    <div className="Footer">
      <footer>
        <p> &#169; 2022</p>
        <h1>THE SPARK FOUNDATION PROJECT</h1>
      </footer>
    </div>
  );
  return ReactDOM.createPortal(
    footerContent,
    document.getElementById("footer-root")
  );
};

export default Footer;
