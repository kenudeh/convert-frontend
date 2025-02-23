import './NavBar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navlinks = ({isMobile, closeMenu}) => {

    const [showServices, setShowServices] = useState(false);

    const toggleServices = () => {
        setShowServices(!showServices)
    };


    return (
        <nav className="Navlinks">
            <ul>
                <li onClick={()=> isMobile && closeMenu()}>
                    <Link to="/">Home</Link>
                </li>
                <li onClick={(e)=> {
                        if (isMobile) {
                            e.preventDefault();
                            toggleServices(); // Toggle sub-menu on mobile
                        }
                    }}
                    onMouseEnter={() => !isMobile && setShowServices(true)} // Show sub-menu on hover for desktop
                    onMouseLeave={() => !isMobile && setShowServices(false)} // Hide sub-menu on hover for desktop
                >
                    <b>Services</b>
                    {showServices && (
                        <ul className='sub-menu'>
                            <li onClick={() => isMobile && closeMenu()}><Link to='/services/sell-airtime'>Sell Airtime</Link></li>
                            <li onClick={() => isMobile && closeMenu()}><Link to='/services/buy-airtime'>Buy Airtime</Link></li>
                            <li onClick={() => isMobile && closeMenu()}><Link to='/services/buy-data'>Buy Data</Link></li>
                        </ul>
                    )}
                </li>
                <li onClick={()=> isMobile && closeMenu()}><Link to='/about'>About Us</Link></li>
                <li onClick={()=> isMobile && closeMenu()}><Link to='/contact'>Contact us</Link></li>
            </ul>
            
            <div className="NavButtons">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/signup'><button className="SignUp">Sign Up</button></Link>
            </div>
        </nav>
    );
}

export default Navlinks;