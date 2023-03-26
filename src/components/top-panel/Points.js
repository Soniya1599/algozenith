import React from "react";
import square from "../../images/RectanglePng.png";
import "./points.scss";

function Points({ text }) {
  return (
    <div className="points">
      <img src={square} alt="*" />
      <span className="points_text">{text}</span>
    </div>
  );
}

export default Points;
