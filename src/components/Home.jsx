import React from "react";
import Dashboard from "./Dashboard";
import Sidebar from "./Sidebar";
import "../assets/Home.css";

const Home = ({ photoURL }) => {
  return (
    <div className="home">
      <div className="AppGlass">
        <div>
          <Sidebar />
        </div>
        <div>
          <Dashboard photoURL={photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Home;
