import React from "react";
import { cardsData } from "../utils/Data";
import "../assets/Caards.css";
import Card from "./Card";

const Caards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <Card
              title={card.title}
              color={card.color}
              value={card.value}
              png={card.png}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Caards;
