import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

import NavLabel from "./NavLabel";


const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/">
        <img src="./photos/logo.png" className="logo" alt="logo" />
      </Link>
      <div className="links2">
        <div className="Header">🔪 J(A)SON 🩸</div>
        <NavLabel
          text="Dołącz teraz!"
          adress="/about"
          className="a"
        ></NavLabel>
        <NavLabel text="O nas" adress="/about" className="a"></NavLabel>
      </div>
    </div>
  );
};

export default NavBar;
