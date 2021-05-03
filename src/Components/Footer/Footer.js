import React from "react";
import { Nav, Navbar } from "react-bootstrap";

import Nico from "./nicologo.png";

function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footerlogo">
          <img src={Nico} alt="nico" />
        </div>
        <div class="footer-left">
          <p class="footer-links">
            <a href="#">Home</a>·<a href="#">Blog</a>·<a href="#">Pricing</a>·
            <a href="#">About</a>·<a href="#">Faq</a>·<a href="#">Contact</a>
          </p>
          <p class="footer-company-name">Nico Alvarez &copy; 2021</p>
        </div>
        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span></span> Berlin
            </p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+49 0163-9628128</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="https://www.gmail.com">neao002@gmail.de</a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
