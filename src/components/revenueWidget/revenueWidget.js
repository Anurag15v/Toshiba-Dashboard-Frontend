import React from 'react';
import './revenueWidget.css'; // Import the CSS file for styling

const RevenueWidget = ({increasePercentage }) => {
  return (
    <div className="widget1">
      <div className="text1">Revenues</div>
      <div className="percentage1">{increasePercentage}% <img className='topRightArrow' src="topRightArrow.png"/></div>
      <div className="increase-text1">You closed 96 out of 100 deals</div>
      <div className="report1">Revenues report <img className="golden-arrow" src="goldenLeftArrow.png"/></div>
    </div>
  );
}

export default RevenueWidget;
