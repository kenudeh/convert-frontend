import React, { useState } from "react";
import TopMenuBar from './TopMenuBar';
import SideMenuBar from "./SideMenuBar";
import InnerFooter from "./InnerFooter";
import UserIcon from "./UserIcon";
import './Styles/Base.css';



const Deposit = () => {

    
    return(
        <main className='dynamic-contents'>
            <TopMenuBar />
            <SideMenuBar />
            {/* Main Content */}
            <article className='main-content'>
                <section className='top-section'>
                    <h2>Deposit</h2>
                    <UserIcon />
                    <section className='balance'>
                        <p>Balance: ₦0.00</p>
                    </section>
                </section>
                <hr></hr>

                <section className='content'>
                    <section className='intro'>
                        <p>Deposit fund to your wallet.</p>
                        <section className='balance'>
                            <p>Balance: ₦0.00</p>
                        </section>
                    </section>

                    <section className="deposit-content">
                        <p>Main Deposit Content</p>
                    </section>


                </section>
            <hr></hr>
            <InnerFooter />
            </article>
        </main>
    )
}

export default Deposit;