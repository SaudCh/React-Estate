import React from "react";
import "./Footer.css";
import logo from "../../assets/footerLogo.svg";
import { FiTwitter } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";
import { FaMediumM, FaRedditAlien } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="logoBox">
        <img src={logo} alt="Logo" />
        <h1>ESTATE PROTOCOL</h1>
        <h6>Questions? Suggestions?</h6>
        <p>team@estateprotocol.com</p>
      </div>
      <div className="socialIcons">
        <a href="https://twitter.com/estateprotocol " target="_blank">
          <FiTwitter className="twitter icon" />
        </a>
        <a href=" https://t.me/+R_7wkTqbWGU4NGE1 " target="_blank">
          <RiTelegramLine className="telegram icon" />
        </a>
        <a href="https://medium.com/@estateprotocol " target="_blank">
          <FaMediumM className="medium icon" />
        </a>
        <a href="https://www.reddit.com/r/EstateProtocol/" target="_blank">
          <FaRedditAlien className="reddit icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
