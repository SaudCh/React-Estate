import React from "react";
import Footer from "../Footer/Footer";
import "./OurTeam.css";
import { OurTeamApi } from "./OurTeamApi";
import { FiLinkedin, FiTwitter } from "react-icons/fi";

function OurTeam() {
  return (
    <div id="ourTeam">
      <h1>Our Team</h1>
      <div className="cardsContainer">
        {OurTeamApi.map((data) => (
          <div className="cards">
            <img src={data.image} alt="" />
            <h2>{data.name}</h2>
            <h6>{data.designation}</h6>
            <p>{data.details}</p>
            <div className="socialIons">
              <a href={data.linkedin} target="_blank">
                <FiLinkedin className="icons" />
              </a>
              {data.twitter ? (
                <a href={data.twitter} target="_blank">
                  <FiTwitter className="icons" />
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default OurTeam;
