import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Styles/MenuBar.css';
import logo from '../../Images/logo.png';
import { useNavigate } from "react-router-dom";


const TopMenuBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  const handleLogout = () => {
    // clear tokens from localstorage
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");

    //Redirect to login page
    navigate("/login");
  }

  return (
    <div className="top-menu-bar">
        {/* Brand Logo */}
        <section className="logo">
            <Link to="/dashboard">
            <img src={logo} alt="convert logo" />
            </Link>
        </section>
    
        <div className='icons'>
            {/* User Icon with Dropdown */}
            <div className="user-icon" onClick={toggleDropdown}>
                <i className="fas fa-user"></i>
                {isDropdownOpen && (
                <div className="dropdown-menu">
                    <Link to="/profile">Profile</Link>
                    <button onClick={handleLogout}><span>Logout</span></button>
                </div>
                )}  
            </div>

            {/* Hamburger/Close Icon */}
            <div className="hamburger-icon" onClick={toggleMenu}>
                <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            {/* Main Navigation Menu (for mobile/tablet) */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/sell-airtime">Sell Airtime</Link>
                <Link to="/buy-airtime">Buy Airtime</Link>
                <Link to="/buy-data">Buy Data</Link>
                <Link to="/wallet">Wallet</Link>
                <Link to="/support">Support</Link>
            </div>
        </div>
    
    </div>
  );
};

export default TopMenuBar;