import React from "react";
import "./Card.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  return (
    <div
      className="CompactCard"
      style={{
        background: props.color.background,
      }}
    >
      <div className="class-l">
        <div className="heading">{props.title}</div>
        <div className="radialBar">
          <CircularProgressbar
            value={props.barValue}
            text={`${props.barValue}%`}
            styles={buildStyles({
              pathColor: props.pathColor,
            })}
          />
        </div>
      </div>

      <div className="class-r">
        <div className="Details">
          <img className="details-img" src={props.png} alt="" />

          <span className="details-value">{props.value}</span>

          <span className="details-topic">{props.txt}</span>
        </div>
      </div>
    </div>
  );
};
export default Card;
