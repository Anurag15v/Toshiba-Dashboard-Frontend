import React, { useState } from 'react';
import './sideBar.css'; // Import CSS file for styling

const SideBar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(true); // Initially set to open

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div>{sidebarOpen?
        <div className='sidebar'>
            <div className="sidebar-header">
                <img src="logo.png" alt="logo" className="logo-icon" />
                OrangeFarm
            </div>
            <div className="search-bar">
                <input type="text" placeholder="Search" className="search-input" />
            </div>
            <div className="tags">
                {/* Customer Tag with dropdown */}
                <div className="tag" onClick={toggleDropdown}>
                    <img src="customer.png" alt="customer" />
                    <p>Customer</p>
                    {dropdownVisible ? (
                        <img src="upArrow.png" alt="up-arrow" className="arrow" />
                    ) : (
                        <img src="downArrow.png" alt="down-arrow" className="arrow" />
                    )}
                </div>
                {/* Dropdown options */}
                {dropdownVisible && (
                    <div className="dropdown-options">
                        <p className="dropdown-option">Current</p>
                        <p className="dropdown-option">New</p>
                        <p className="dropdown-option">Negotiating</p>
                    </div>
                )}
                {/* Other tags */}
                <div className="tag">
                    <img src="dashboard.png" alt="dashboard" />
                    <p>Dashboard</p>
                </div>
                <div className="tag">
                    <img src="reports.png" alt="reports" />
                    <p>All Reports</p>
                </div>
                <div className="tag">
                    <img src="geography.png" alt="geography" />
                    <p>Geography</p>
                </div>
                <div className="tag">
                    <img src="conversation.png" alt="conversation" />
                    <p>Conversation</p>
                </div>
                <div className="tag">
                    <img src="deals.png" alt="deals" />
                    <p>Deals</p>
                </div>
                <div className="tag">
                    <img src="export.png" alt="export" />
                    <p>Export</p>
                </div>
            </div>
            {/* User control section */}
            <div className='user-control'>
                <div className="user-info">
                    <img src="profile.png" alt="user" className="user-icon" />
                    <div className='user-detail'>
                        <span className="user-name">Gustavo Xavier</span>
                        <span className='role'>Admin</span>
                    </div>
                </div>
                <div className="tag">
                    <img src="settings.png" alt="settings" />
                    <p>Settings</p>
                </div>
                <div className="tag">
                    <img src="log-out.png" alt="logout" />
                    <p style={{ color: '#B01212' }}>Log Out</p>
                </div>
            </div>
            <div className="toggle-button" onClick={toggleSidebar}>
                {sidebarOpen ? (
                    <img src="leftArrow.png" alt="close" className="leftArrow" />
                ) : null}
            </div>
        </div>:
        <div className="close-sidebar-view">
            <div className='close-sidebar-up'>
                <img src="logo.png" alt="logo" className="sidebar-icon" />
                <img src="microscope-icon.png" alt="microscope" className="sidebar-icon" />
                <img src="dashboard.png" alt="dashboard" className="sidebar-icon" />
                <img src="customer.png" alt="customer" className="sidebar-icon" />
                <img src="reports.png" alt="reports" className="sidebar-icon" />
                <img src="geography.png" alt="geography" className="sidebar-icon" />
                <img src="conversation.png" alt="conversation" className="sidebar-icon" />
                <img src="deals.png" alt="deals" className="sidebar-icon" />
                <img src="export.png" alt="export" className="sidebar-icon" />
            </div>
            <div className="toggle-button" onClick={toggleSidebar}>
                <img src="rightArrow.png" alt="open" className="rightArrow" />
            </div>
            {/* Images at the bottom */}  
            <div className='close-sidebar-down'>
                <img src="profile.png" alt="profile" className="sidebar-icon" />
                <img src="settings.png" alt="settings" className="sidebar-icon" />
                <img src="log-out.png" alt="logout" className="sidebar-icon" />
            </div>
        </div>}</div>
    );
}

export default SideBar;
