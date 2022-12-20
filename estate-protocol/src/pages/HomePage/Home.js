import React from "react";
import "./Home.css";
import OurTeam from "../../components/OurTeam/OurTeam";
import ItsKind from "../../components/ItsKind/ItsKind";
import CardsComp from "../../components/CardsComp/CardsComp";
import Protocol from "../../components/Protocol/Protocol";
import RealEstate from "../../components/RealEstate/RealEstate";

function Home() {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(to bottom, rgb(13, 13, 43), rgb(48, 48, 99))",
        }}
      >
        <RealEstate />
        <Protocol />
      </div>
      <CardsComp />
      <div
        style={{
          background:
            " linear-gradient(to bottom, rgb(48, 48, 99), rgb(13, 13, 43))",
        }}
      >
        <ItsKind />
        <OurTeam />
      </div>
    </>
  );
}

export default Home;
