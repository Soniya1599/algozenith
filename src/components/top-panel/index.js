import React from "react";
import Points from "./Points";
import TopRightImg from "../../images/TopRightImgPng.png";
import MaskGroup from "../../images/MaskgroupPng.png";
import "./index.scss";

function TopPanel() {
  return (
    <div>
      <img className="topPanel_effect" width={1800} src={MaskGroup} alt="img" />
      <div className="topPanel_container">
        <div className="topPanel_left">
          <h1 className="topLeft_heading">Be better at DSA & CP</h1>
          <p className="topLeft_paraText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div className="topLeft_btnContainer">
            <button className="topLeft_btn topLeft_btn1">Join now</button>
            <button className="topLeft_btn topLeft_btn2">
              View curriculum
            </button>
          </div>
          <div className="topLeft_pointContainer">
            <div className="topLeft_points topLeft_leftPoints">
              <Points text="Lorem ipsum dolor sit amet" />
              <Points text="Lorem ipsum dolor sit amet" />
            </div>
            <div className="topLeft_points topLeft_rightPoints">
              <Points text="Lorem ipsum dolor sit amet" />
              <Points text="Lorem ipsum dolor sit amet" />
            </div>
          </div>
        </div>
        <div className="topPanel_right">
          <img
            style={{ width: 761, height: 820 }}
            src={TopRightImg}
            alt="img"
          />
        </div>
      </div>
    </div>
  );
}

export default TopPanel;
