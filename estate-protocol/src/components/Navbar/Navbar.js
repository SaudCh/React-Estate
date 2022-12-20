import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [scrollDirection, setScrollDirection] = React.useState(null);
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 70 ? scrollY : 70;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return (
    <>
      <div
        className={`navbar ${scrollDirection === "down" ? "fixer" : "navbar"}`}
      >
        <div className="logo">
          <img src={logo} alt="Estate Protocol" />
          <div className="mt-2">
            <h1>ESTATE</h1>
            <h1>PROTOCOL</h1>
          </div>
        </div>
        <div className="register">
          <button>Register</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
