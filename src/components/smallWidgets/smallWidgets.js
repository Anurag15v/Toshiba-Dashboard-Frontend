import React from 'react';
import './smallWidgets.css'; // Import the CSS file for styling

const SmallWidgets = () => {
  return (
    <div className="small-widgets-container">
      <div className="widget3">
        <div className="header3">Top Month</div>
        <div>
            <div className="text-month">November</div>
            <div className="text-year">2019</div>
        </div>
      </div>
      <div className="widget3">
        <div className="header3">Top Year</div>
        <div>
            <div className="text-month">2023</div>
            <div className="text-sold">96K sold so far</div>
        </div>
      </div>
      <div className="widget3">
        <div className="header3">Top Buyer</div>
        <div>
            <img className="profile-image" src="user2.png" alt="Profile" />
            <div className="name">Maggie Johnson</div>
            <div className="company">Oasis Organic Inc.</div>
        </div>
      </div>
    </div>
  );
}

export default SmallWidgets;
