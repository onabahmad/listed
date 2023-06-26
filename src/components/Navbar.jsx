import React, { useState } from "react";
import { NavbarData } from "../utils/Data";
import "../assets/Navbar.css";
import { motion } from "framer-motion";
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };
  console.log(window.innerWidth);
  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <AiOutlineBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="logo">
          <span>Board.</span>
        </div>

        <div className="menu">
          {NavbarData.map((item, index) => {
            return (
              <div
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}

          <div className="menuItem">
            <span>Help</span>
            <br />
            <br />

            <span>Contact Us</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
