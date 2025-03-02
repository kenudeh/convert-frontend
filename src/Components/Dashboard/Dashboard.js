import React, {useEffect, useState } from 'react';
import './Styles/Base.css';
import { Link } from 'react-router-dom';
import TopMenuBar from './TopMenuBar';
import InnerFooter from './InnerFooter';
import SideMenuBar from './SideMenuBar';
import UserIcon from './UserIcon';



const Dashboard = () => {

  //Fetching API data
  const [offers, setOffers] = useState([])  // State to store the offers data

  /*

  useEffect(() => {   // Fetch offers from the API
    const fetchOffers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/offers');
        if (!response.ok) {
          throw new Error('Failed to fetch offers');
        }
        const data = await response.json();
        console.log(data); // Log the API response

        if (data && data.offers) {
          setOffers(data.offers); // Assuming the API returns an array of offers
        } else {
          console.error('invlid API response:', data);
        }
        
      } catch (error) {
        console.error('Error fatching offers:', error);
      }
      
    };

    fetchOffers();
  }, []); // Empty dependency array ensures this runs only once on component mount

  */



  
  //MOCK API DATA FOR TESTING ONLY!
  useEffect(() => {
  const mockOffers = [
    {
      offerType: "Data Bundle",
      network: "MTN",
      value: 10,
      discount: 100,
      amount: 900,
    },
    {
      offerType: "Airtime",
      network: "Airtel",
      value: 500,
      discount: 50,
      amount: 450,
    },
    {
      offerType: "Airtime",
      network: "Airtel",
      value: 500,
      discount: 50,
      amount: 450,
    },
    {
      offerType: "Airtime",
      network: "Airtel",
      value: 500,
      discount: 50,
      amount: 450,
    },
    {
      offerType: "Data Bundle",
      network: "Airtel",
      value: 20,
      discount: 50,
      amount: 450,
    },
  ];

  setOffers(mockOffers);
  }, []);





  return (
    <main className='dynamic-contents'>

      {/* Top Menu Bar component (Mobile Only) */}
      <TopMenuBar />
      
      {/* Side Menu (Desktop and Tablet) */}
      <SideMenuBar />

      {/* Main Content */}
      <article className='main-content'>
        <section className='top-section'>
          <h2>Dashboard</h2>
          <UserIcon />
          <section className='balance'>
            <p>Balance: ₦0.00</p>
          </section>
        </section>
        <hr></hr>

        <section className='content'>
          <section className='intro'>
              <p>Welcome to your dashboard, First name.</p>
              <section className='balance'>
                <p>Balance: ₦0.00</p>
              </section>
          </section>
          
          <section className='offers-and-actions'>
              {/* Offers Section */}
              <section className='offers'>
                <p>Offers</p>
                <section className='offer-details'>
                  {/* Map over the offers array and render a card for each offer */}
                  {offers.map((offer, index) => (
                    <div key={index} className='offer-card'>
                      <p className='offer-type-header'>{offer.offerType}</p>
                      <p>{offer.network}</p>
                      <p>
                        {`${offer.offerType === 'Airtime' ? '₦' : ''} ${offer.value} ${offer.offerType === 'Data Bundle' ? 'Gb' : ''}`} 
                      </p>
                      <p className='discount'>₦{offer.discount}</p>
                      <p>Payable amount: ₦{offer.amount}</p>
                      <button>Get</button>
                    </div>
                  ))}
              
                </section>
           
              </section>

              <section className='quick-action'>
                <p>Quick Actions</p>
                <Link to='/sell-airtime'><button>Sell Airtime</button></Link>
                <Link to='/buy-airtime'><button>Buy Airtime</button></Link>
              </section>

          </section>

          

          <article className='transaction'>
            <table>
              <caption>Recent Transactions</caption>
              <thead>
                <tr>
                  <th>Transaction Id</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>entry 1</td>
                  <td>entry 2</td>
                  <td>entry 3</td>
                  <td>entry 4</td>
                </tr>
              </tbody>
            </table>
          </article>
          
        </section>
        <hr></hr>
        <InnerFooter />
      </article>

    </main>
  )
}

export default Dashboard
