import React from "react";
import "./RealEstate.css";
import vector10 from "../../assets/vector10.svg";
import { BsChevronRight } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { RiTelegramLine } from "react-icons/ri";
import { FaMediumM, FaRedditAlien } from "react-icons/fa";
import Aos from "aos";
import Whitepaper from "../../assets/Whitepaper.pdf";
function RealEstate() {
  Aos.init();
  Aos.refresh();
  return (
    <>
      <div id="realEstate">
        <div className="left-side">
          <div className="touch">
            <p>Interested in tokenising your property?</p>
            <a href="mailTo: team@estateprotocol.com" target="_blank">
              <button>Get In Touch</button>
            </a>
          </div>
          <h1>World's first marketplace for NFTs backed by real estate</h1>
          <div className="btn">
            <a
              href="https://parvp.substack.com/p/estate-protocol-manifesto?r=1fhmmx&s=w&utm_campaign=post&utm_medium=email"
              target="_blank"
              className="operMini"
            >
              <button>Open Manifesto</button>
              <BsChevronRight className="greater" />
            </a>
            <a href={Whitepaper} target="_blank" className="operWhite">
              <button>Open Whitepaper</button>
              <BsChevronRight className="great" />
            </a>
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
        </div>
        <div
          className="right-side"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <img src={vector10} alt="" />
        </div>
      </div>
    </>
  );
}

export default RealEstate;
