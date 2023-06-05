import React from "react";
import "../assets/MainDash.css";
import { FaRegBell } from "react-icons/fa";
import Caards from "./Caards";
import Linechart from "./Linechart";
import Piechart from "./Piechart";

const MainDash = ({ photoURL }) => {
  return (
    <div className="MainDash">
      <div className="Header">
        <p className="dashboard_title">Dashboard</p>
        <div className="search_bell_prof">
          <input className="searchbar" type="search" placeholder="Search..." />
          <FaRegBell style={{ fontSize: 20 }} />

          <img className="profile_img" src={photoURL} alt="User" />
        </div>
      </div>
      <Caards />
      <Linechart />
      <Piechart />
    </div>
  );
};

export default MainDash;
