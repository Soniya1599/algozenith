import React from "react";
import Points from "../top-panel/Points";
import TriangleFrame from "../../images/BottomRightTriangleFrame.png";
import "./card.scss";

function Card() {
  return (
    <div className="cardContainer">
      <div className="card_topContainer">
        <div className="card_topLeftContainer">
          <div className="card_topHeader">Premium Victory Batch</div>
          <div className="card_oldPrice">
            <strike>₹19,999</strike>
          </div>
          <div className="card_newPrice">₹13,999</div>
        </div>
        <div className="card_topRightContainer">
          <img src={TriangleFrame} alt="img" />
        </div>
      </div>
      <div className="card_bottomContainer">
        <Points text="100+ Hrs Live Content" />
        <Points text="50+ Hrs Contest" />
        <Points text="500+ Problems" />
        <Points text="Includes an interview bootcamp and access to a mentor network" />
        <Points text="Enjoy access to our content for one year (paid extensions available)" />
        <Points text="Flexible payment options, including no-cost EMI, are available." />
        <div className="card_buttonContainer">
          <button className="card_button">Join Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
