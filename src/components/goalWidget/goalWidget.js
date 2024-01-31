import React from 'react';
import './goalWidget.css'; // Import the CSS file for styling
import SemiCircleProgressBar from "react-progressbar-semicircle";

const GoalWidget = ({ progress }) => {
  return (
    <div className="goal-widget">
        <div className="text10">Quarter Goal</div>
        <div>
            <SemiCircleProgressBar percentage={progress} showPercentValue stroke="#FFCD71" background={"#FFF7E8"}/>
        </div>
        <div className="goal-report">All goals <img className="golden-arrow" src="goldenLeftArrow.png"/></div>
    </div>
  );
}

export default GoalWidget;
