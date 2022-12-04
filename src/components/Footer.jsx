import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Suhaib.</span>
        <div className="links">
          <a href="https://www.linkedin.com/in/suhaib-ahmed-shariff-a6919b216/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/asuhaib2002">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/uncultured_paki">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Suhaib
        </p>
      </div>
    </footer>
  );
}

export default Footer;