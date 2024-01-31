import React from 'react';
import './stateWidget.css'; // Import the CSS file for styling

const StateWidget = () => {
  return (
    <div className="states-widget">
      <div className="header5">Top States</div>
      <div className="state-row" style={{ width: '90%' }}>
        <div className="state-name">NY</div>
        <div className="state-amount">120K</div>
      </div>
      <div className="state-row" style={{ width: '70%' }}>
        <div className="state-name">MA</div>
        <div className="state-amount">80K</div>
      </div>
      <div className="state-row" style={{ width: '65%' }}>
        <div className="state-name">NH</div>
        <div className="state-amount">70K</div>
      </div>
      <div className="state-row" style={{ width: '40%' }}>
        <div className="state-name">OR</div>
        <div className="state-amount">50K</div>
      </div>
      {/* Repeat for other state rows */}
    </div>
  );
}

export default StateWidget;
