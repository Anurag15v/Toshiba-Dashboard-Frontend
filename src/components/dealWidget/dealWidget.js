import React from 'react';
import './dealWidget.css'; // Import the CSS file for styling

const DealWidget = ({lossPercentage }) => {
  return (
    <div className="widget2">
      <div className="text2">Lost deals</div>
      <div className="percentage2">{lossPercentage}%</div>
      <div className="increase-text2">Increase compared to last week</div>
      <div className="report2">All deals <img className="golden-arrow" src="goldenLeftArrow.png"/></div>
    </div>
  );
}

export default DealWidget;
