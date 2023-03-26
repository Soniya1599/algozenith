import React from "react";
import Blocks from "./Blocks";
import Card from "./Card";
import "./index.scss";

function BottomPanel() {
  return (
    <div className="bottomContainer">
      <div className="bottomPanel_container">
        <div className="bottomPanel_left">
          <div className="bottom_descriptionBlock">
            <h1 className="bottom_heading">
              Invest in skills, <br></br>
              <span className="bottom_highlightText">earn 10X</span> of what you
              paid.
            </h1>
            <p className="bottom_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="bottom_blocks">
            <div className="bottom_leftBlocks">
              <Blocks label="1.2 Cr/Year" subLabel="highest fresher package" />
              <Blocks label="1000+ Offers" subLabel="from top companies" />
            </div>
            <div className="bottom_rightBlocks">
              <Blocks
                label="Multiple <100 Ranks"
                subLabel="in kickstart last year"
              />
              <Blocks
                label="Trusted by IITians"
                subLabel="for their career prep"
              />
            </div>
          </div>
        </div>
        <div className="bottomPanel_right">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default BottomPanel;
