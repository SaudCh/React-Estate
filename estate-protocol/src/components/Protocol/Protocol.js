import React from "react";
import "./Protocol.css";
import matro from "../../assets/matro.png";
function Protocol() {
  return (
    <>
      <div id="protocol">
        <img
          src={matro}
          alt=""
          data-aos="fade-up-right"
          data-aos-duration="3000"
        />
        <div className="real">
          <h4>
            Democratising access to Real Estate through blockchain technology
          </h4>
          <p>
            Estate Protocol is a platform bringing ownership for commercial real
            estate on-chain, fractionalising ownership, increasing transparency,
            and removing gatekeepers.
          </p>
        </div>
      </div>
    </>
  );
}

export default Protocol;
