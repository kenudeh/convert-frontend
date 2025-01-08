import Footer from './Components/Footer/Footer';
import Content from './Content';
import NavBar from './Components/NavBar/NavBar';
import { Helmet } from 'react-helmet';




function App() {
  return (
    <main className="App">
      <Helmet>
      <title>Your Website Title</title>
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
      <Content />
      <Footer />
    </main>
  );
}

export default App;