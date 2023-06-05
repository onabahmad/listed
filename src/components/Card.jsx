import React from "react";
import "../assets/Card.css";

const Card = ({ title, color, value, png: Icon }) => {
  return (
    <div style={{ backgroundColor: color.backGround }} className="CompactCard">
      <div className="card-content">
        <p className="card-title">{title}</p>
        <h3 className="card-value">{value}</h3>
      </div>
      <div className="card-icon">
        <Icon />
      </div>
    </div>
  );
};
export default Card;
