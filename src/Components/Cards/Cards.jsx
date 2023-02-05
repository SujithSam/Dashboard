import React from "react";
import { CardsData } from "../../Data/Data";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, id) => {
        return (
          <div className="ParentContainer">
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              txt={card.txt}
              pathColor={card.color.pathColor}
            ></Card>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
