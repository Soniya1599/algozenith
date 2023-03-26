import React from "react";
import Block from "../../images/Block.png";
import "./blocks.scss";

function Blocks({ label, subLabel }) {
  return (
    <div className="blocksContainer">
      <div className="blocks_imgContainer">
        <img src={Block} alt="block" />
      </div>
      <div className="blocks_rightContent">
        <div className="blocks_label">{label}</div>
        <div className="blocks_subLabel">{subLabel}</div>
      </div>
    </div>
  );
}

export default Blocks;
