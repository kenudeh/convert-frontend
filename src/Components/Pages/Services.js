import { Helmet } from "react-helmet";
import {Link, Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer';
import NavBar from "../NavBar/NavBar";

const Services = () => {
    return(
        <main>
            <Helmet>
                <title>Services - Convert</title>
                <meta name="description" content="Explore our services: Sell Airtime, Buy Airtime, and Buy Data." />
            </Helmet>
            <article>
                <NavBar />
                <h1>Services</h1>
                <nav>
                    <Link to='sell-airtime'>Sell Airtime</Link> |
                    <Link to='buy-airtime'>Buy Airtime</Link> |
                    <Link to='buy-data'>Buy Data</Link>
                </nav>

                {/* Render sub-pages here */}
                <Outlet />
                <Footer />
            </article>
           
        </main>
    )
}


export default Services;