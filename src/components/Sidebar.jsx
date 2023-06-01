import React from "react";
import "../assets/Sidebar.css";
import { FiPieChart } from "react-icons/fi";
import { BsTags } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="container">
      <nav>
        <div className="navbar">
          <div className="logo">
            <h1>Board.</h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span className="nav-item">
                  <FiPieChart className="icons" />
                  <p>Dashboard</p>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="nav-item">
                  <BsTags className="icons" />
                  Transactions
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="nav-item">
                  <TbCalendarTime className="icons" />
                  Schedules
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="nav-item">
                  <BiUserCircle className="icons" />
                  Users
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fas fa-cog"></i>
                <span className="nav-item">
                  <AiOutlineSetting className="icons" />
                  Settings
                </span>
              </a>
            </li>
            <li>
              <a href="#" className="help">
                <span className="nav-item">Help</span>
              </a>
            </li>
            <li>
              <a href="#" className="logout">
                <span className="nav-item">Contact Us</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
