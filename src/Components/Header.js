import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const  Header=()=> {
  return (
    <div className="Header">
      <div className="BankName">
        <NavLink to="/">SPX BANK</NavLink>
      </div>
      <div className="Header_Options">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/transfer-money">
          <p>Money Transfer</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;