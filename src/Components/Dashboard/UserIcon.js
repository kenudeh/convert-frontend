import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Styles/Base.css';




const UserIcon = () => {
    
    // State to keep track of the dropdown
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    const navigate = useNavigate();
  
    const handleLogout = () => {
      // clear tokens from localstorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
  
      //Redirect to login page
      navigate("/login");
    }


    return(
        <div className="user-icon" onClick={toggleDropdown}>
             {/* User Icon with Dropdown */}
            <i className="fas fa-user"></i>
            {isDropdownOpen && (
            <div className="dropdown-menu">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}><span>Logout</span></button>
            </div>
            )}  
        </div>
    )
}


export default UserIcon;