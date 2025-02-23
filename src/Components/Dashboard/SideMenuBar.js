import logo from './../../Images/logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './MenuBar.css';


const SideMenuBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <main>
            {/* Side Menu (Desktop) */}
            <article className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <section className='logo'>
                    <img src={logo} alt='convert logo' />
                </section>
                <section className='menu-items'>
                    <ul>
                        <Link to='/dashboard'><li><i className='fas fa-home'></i>Dashboard</li></Link>
                        <Link to='/sell-airtime'><li><i className='fas fa-money-bill'></i>Sell airtime</li></Link>
                        <Link to='/buy-airtime'><li><i className='fas fa-shopping-cart'></i>Buy airtime</li></Link>
                        <Link to='/buy-data'><li><i className='fas fa-database'></i>Buy data</li></Link>
                        <Link to='/wallet'><li><i className='fas fa-wallet'></i>Wallet</li></Link>
                    </ul>
                </section>

                <section className='support'>
                    <Link to='/support'><p><i className='fas fa-life-ring'></i>Support</p></Link>
                </section>
            </article>
        </main>
    )
}

export default SideMenuBar;