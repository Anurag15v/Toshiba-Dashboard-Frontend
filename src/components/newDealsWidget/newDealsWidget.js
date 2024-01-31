import React from 'react';
import './newDealsWidget.css'; // Import the CSS file for styling

const NewDealsWidget = () => {
  return (
    <div className="new-deals-widget">
      <div className="header6">New deals</div>
      <div className="deal">
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Fruit2Go</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Marshall's MKT</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">CCNT</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Joana Mini-market</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Little Brazil Vegan</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Target</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Organic Place</div>
        </div>
        <div className="deal-info">
          <img src="plus.png" alt="Plus" className="plus-icon" />
          <div className="deal-text">Morello's</div>
        </div>
      </div>
    </div>
  );
}

export default NewDealsWidget;
