import React, {useEffect, useState } from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import TopMenuBar from './TopMenuBar';
import SideMenuBar from './SideMenuBar';
import InnerFooter from './InnerFooter';


const Dashboard = () => {
    

    return (
        <main className='dynamic-contents'>
            {/* Top Menu (Desktop) */}
            <TopMenuBar />
            {/* Side Menu (Desktop) */}
            <SideMenuBar />
            {/* Main Content */}
            <article className='main-content'>
                <section className='top-section'>
                <h2>Sell Airtime</h2>
                <i className='fas fa-user' />
                <section className='balance'>
                    <p>Balance: ₦0.00</p>
                </section>
                </section>
                <hr></hr>

                <section className='content'>
                <section className='intro'>
                    <p>Convert airtime to cash.</p>
                    <section className='balance'>
                        <p>Balance: ₦0.00</p>
                    </section>
                </section>
                
            

                

                <article className='transaction'>
                    <table>
                    <caption>Recent Airtime Sales</caption>
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
