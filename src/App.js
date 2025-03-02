import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Homepage from './Components/Pages/Homepage';
import Services from './Components/Pages/Services';
import SellAirtime from './Components/Pages/SellAirtime';
import BuyAirtime from './Components/Pages/BuyAirtime';
import BuyData from './Components/Pages/BuyData';
import BillPayment from './Components/Pages/BillPayment';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog';
import SignUp from './Components/Pages/LoginAndSignup/Signup';
import Login from './Components/Pages/LoginAndSignup/Login';
import TermsOfService from './Components/Footer/TermsOfService';
import FAQ from './Components/Footer/FAQ';
import Privacy from './Components/Footer/Privacy';
import NotFound from './Components/Pages/NotFound';

//Dashboard components
import Dashboard from './Components/Dashboard/Dashboard';
import AirtimeBuy from './Components/Dashboard/AirtimeBuy';
import DataBuy from './Components/Dashboard/DataBuy';
import AirtimeSell from './Components/Dashboard/AirtimeSell';
import Wallet from './Components/Dashboard/Wallet';
import Tickets from './Components/Dashboard/Tickets';
import Profile from './Components/Dashboard/Profile';
import Deposit from './Components/Dashboard/Deposit';
import Withdrawal from './Components/Dashboard/Withdrawal';





function App() {
  return (
    <HelmetProvider>
      <Router> 
        <main className="App">
          {/* Routes */}
          <div className='content'>
            <Routes>
              {/* Homepage */}
              <Route path='/' element={<Homepage />} />

              {/* Services and its Sub-Pages */}
              <Route path='/services' element={<Services />}>
                <Route path='sell-airtime' element={<SellAirtime />} />
                <Route path='buy-airtime' element={<BuyAirtime />} />
                <Route path='buy-data' element={<BuyData />} />
                <Route path='bill-payment' element={<BillPayment />} />
              </Route>

              {/* Other Pages */}
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/terms-of-service' element={<TermsOfService />} />
              <Route path='/faqs' element={<FAQ />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='*' element={<NotFound />} />

              {/*Dashboard and its pages*/}
              <Route path='/sell-airtime' element={<AirtimeSell />} />
              <Route path='/buy-airtime' element={<AirtimeBuy />} />
              <Route path='buy-data' element={<DataBuy />} />
              <Route path='/wallet' element={<Wallet />} />
              <Route path='/support' element={<Tickets />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/withdrawal' element={<Withdrawal />} />
              <Route path='/deposit' element={<Deposit />} />
      

            </Routes>
          </div>

        </main>
      </Router>
    </HelmetProvider>
  );
}

export default App;