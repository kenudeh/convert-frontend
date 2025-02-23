import "./Hero.css";
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { Helmet } from "react-helmet-async";


const Homepage = () =>{
	return(
		<div className='Landing'>
			<Helmet>
				<title>Convert</title>
				<meta name="description" content="The premier airtime-to-cash conversion app in Nigeria" />
				<meta name="keywords" content="airtime, recharge card, credit, airtime to cash, sell airtime, buy data, buy airtime" />
				<meta property="og:title" content="Seamless airtime to cash conversion" />
				<meta property="og:description" content="Nigeria's premier airtime to cash convertion platform" />
				<meta property="og:image" content="/images/logo.png" />
				<meta property="og:url" content="https://www.convert.com.ng/" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Seamless airtime to cash conversion" />
				<meta name="twitter:description" content="Nigeria's premier airtime to cash convertion platform" />
				<meta name="twitter:image" content="/images/logo.png" />
			</Helmet>
			<NavBar />
			<section className="Hero">
				<div className="Hero-content">
					<h1 className="Hero-heading">Convert Airtime to Cash in No Time</h1>
					<p className="Hero-subheading">We buy MTN and Airtel airtimes at the best possible rates! </p>
					<a href="/sell-airtime"><button className="cta-button"><span style={{fontSize:"1.1rem"}}>Get Started</span></button></a>
				</div>								
			</section>
			<Footer />
		</div>
	)
}


export default Homepage;