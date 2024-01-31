import React from 'react';
import './customerWidget.css'; // Import the CSS file for styling

const CustomersWidget = () => {
  const hoverOverlay=()=>
  {
    return (<div className="hover-overlay">
    <img className='options-img' src="chat.png" alt="Image 1" />
    <img className='options-img' src="star.png" alt="Image 2" />
    <img className='options-img' src="edit.png" alt="Image 3" />
    <img className='options-img' src="line.png" alt="Image 4" />
    <img className='options-img' src="set.png" alt="Image 5" />
  </div>);
  }
  return (
    <div className="customers-widget">
      <div className="header7">
        <div className='text2'>Customers</div>
        <div className="sort">
          Sort by Newest <img className="down-arrow" src="downArrow.png" alt="Down Arrow" />
        </div>
      </div>
      <div className="customer-list">
        {/* Example customer rows */}
        <div className="customer-row">
          <img src="user1.png" alt="Profile" />
          <div>
            <div className="username">Chris Friedkly</div>
            <div className="info">Supermarket Villanova</div>
          </div>
          {hoverOverlay()}
        </div>
        <div className="customer-row">
          <img src="user2.png" alt="Profile" />
          <div>
            <div className="username">Maggie Johnson</div>
            <div className="info">Oasis Organic Inc.</div>
          </div>
          {hoverOverlay()}
        </div>
        <div className="customer-row">
          <img src="user3.png" alt="Profile" />
          <div>
            <div className="username">Gael Harry</div>
            <div className="info">New York Finest Fruits</div>
          </div>
          {hoverOverlay()}
        </div>
        <div className="customer-row">
          <img src="user4.png" alt="Profile" />
          <div>
            <div className="username">Jenna Sullivan</div>
            <div className="info">Walmart</div>
          </div>
          {hoverOverlay()}
        </div>
        <div className="customer-report">All customers <img className="golden-arrow" src="goldenLeftArrow.png"/></div>
        {/* Repeat for other customer rows */}
      </div>
    </div>
  );
}

export default CustomersWidget;
