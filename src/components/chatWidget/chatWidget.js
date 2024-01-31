import React from 'react';
import './chatWidget.css'; // Import the CSS file for styling

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <div className="header4">Chats</div>
      <div className="unread-messages">2 unread messages</div>
      <div className="user-images">
        {/* Assuming user images are named profile1.jpg, profile2.jpg, etc. */}
        <div className='image-cover'>
            <img className="user-image" src="user1.png" alt="user 1" />
        </div>
        <div className='image-cover'>
            <img className="user-image" src="user2.png" alt="user 2" />
        </div>
        <div className='white-image-cover'>
            <img className="user-image" src="user3.png" alt="user 3" />
        </div>
        <div className='white-image-cover'>
            <img className="user-image" src="user4.png" alt="user 4" />
        </div> 
      </div>
    </div>
  );
}

export default ChatWidget;
