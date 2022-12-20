import React from "react";
import "./ItsKind.css";
import itsKind2 from "../../assets/itsKind2.svg";
import Aos from "aos";
function ItsKind() {
  Aos.init();
  Aos.refresh();
  return (
    <div id="itsKind">
      <div className="textBox">
        <h1>The most scalable and transparent platform of its kind</h1>
        <p>
          We use NFTs to turn paper ownership into digital ownership, and smart
          contracts to let users invest in these properties in fractions. We
          have high diligence and data provision standards, with decentralised
          oracle partnerships to provide users with trustworthy, third-party
          data.
        </p>
      </div>
      <div>
        <img
          src={itsKind2}
          alt=""
          data-aos="fade-left"
          data-aos-duration="3000"
        />
      </div>
    </div>
  );
}

export default ItsKind;
