import React from "react";
import Navbar from "./Navbar";
import "../assets/Home.css";
import MainDash from "./MainDash";

const Home = ({ photoURL }) => {
  return (
    <div className="home">
      <div className="AppGlass">
        <Navbar />

        <MainDash photoURL={photoURL} />
      </div>
    </div>
  );
};

export default Home;
