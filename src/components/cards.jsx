import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import { BsTags } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const Cards = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="upper_card">
        <IoWalletOutline className="card_icons" />
        <p>Total Revenues</p>
        <h2>$2,129,430</h2>
      </div>

      <div className="upper_card">
        <BsTags className="card_icons" />
        <p>Total Transactions</p>
        <h2>1520</h2>
      </div>

      <div className="upper_card">
        <AiOutlineLike className="card_icons" />
        <p>Total Likes</p>
        <h2>9721</h2>
      </div>

      <div className="upper_card">
        <FiUsers className="card_icons" />
        <p>Total Users</p>
        <h2>892</h2>
      </div>
    </div>
  );
};

export default Cards;
