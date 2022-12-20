import React from "react";
import "./CardsComp.css";
import dollar from "../../assets/dollar.svg";
import TrapIcon from "../../assets/TrapIcon.svg";
import building from "../../assets/building.svg";
import hammer from "../../assets/hammer.svg";
import { BsChevronRight } from "react-icons/bs";

function CardsComp() {
  return (
    <div id="cardsComp">
      <div className="cardsContainer">
        <div className="cards">
          <img src={dollar} alt="" />
          <h5>Lower barrier to entry</h5>
          <p>
            Currently, commercial real estate is only available to large
            investors. We make it accessible to everyone.
          </p>
          <div className="iconContainer">
            <a
              href="https://web.archive.org/web/20220515035646mp_/https://estateprotocol.com/whitepaper"
              target="_blank"
            >
              <BsChevronRight className="icon" />
            </a>
          </div>
        </div>

        <div className="cards">
          <img src={TrapIcon} alt="" />
          <h5>Higher liquidity</h5>
          <p>
            Users would be able to trade these tokens on secondary marketplaces
            like OpenSea and Uniswap.
          </p>
          <div className="iconContainer">
            <a
              href="https://web.archive.org/web/20220515035646mp_/https://estateprotocol.com/whitepaper"
              target="_blank"
            >
              <BsChevronRight className="icon" />
            </a>
          </div>
        </div>

        <div className="cards">
          <img src={building} alt="" />
          <h5>Easy Diversification</h5>
          <p>
            Veteran investors can diversify their portfolio across
            jurisdictions.
          </p>
          <div className="iconContainer">
            <a
              href="https://web.archive.org/web/20220515035646mp_/https://estateprotocol.com/whitepaper"
              target="_blank"
            >
              <BsChevronRight className="icon" />
            </a>
          </div>
        </div>

        <div className="cards">
          <img src={hammer} alt="" />
          <h5>Legal compliance</h5>
          <p>Estate Protocol is fully legally compliant from day 1.</p>
          <div className="iconContainer">
            <a
              href="https://web.archive.org/web/20220515035646mp_/https://estateprotocol.com/whitepaper"
              target="_blank"
            >
              <BsChevronRight className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsComp;
