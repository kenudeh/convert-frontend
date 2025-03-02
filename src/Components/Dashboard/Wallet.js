import React, { useState, useEffect } from "react";
import TopMenuBar from './TopMenuBar';
import SideMenuBar from "./SideMenuBar";
import InnerFooter from "./InnerFooter";
import UserIcon from "./UserIcon";
import './Styles/Base.css';
import './Styles/wallet.css';
import { useNavigate } from "react-router-dom";


// Define the base URL for the API
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

// Wallet component
const Wallet = () => {
    const [balance, setBalanace] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 


    // Fetch balance on mount
    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/api/wallet`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem("access_token")}`,
                    },
                });

                // Check for error fetchning balance
                if (!response.ok) {
                    throw new Error("failed to fetch balance");
                }

                const data = await response.json();
                setBalanace(data.balance);
            } catch (error) {
                console.error("Error fetching balance:", error);
                setError("Failed to load balance. Please, try again")
            } finally {
                setIsLoading(false);
            }
        };

        fetchBalance();
    }, []);


    
    return(
        <main className='dynamic-contents'>
            <TopMenuBar />
            <SideMenuBar />
            {/* Main Content */}
            <article className='main-content'>
                <section className='top-section'>
                    <h2>Wallet</h2>
                    <UserIcon />
                    <section className='balance'>
                        <p>Balance: ₦0.00</p>
                    </section>
                </section>
                <hr></hr>

                <section className='content'>
                    <section className='intro'>
                        <p>Welcome to your wallet</p>
                        <section className='balance'>
                            <p>Balance: ₦0.00</p>
                        </section>
                    </section>

                    <section className="wallet-container">
                        {/* Balance Section */}
                        <div className="balance-section">
                            <h2 className="balance-title">Balance</h2>
                            <div className="balance-amount">
                                {isLoading ? (
                                    <div className="loading-spinner"></div>
                                ) : error ? (
                                    <p className="error-message">{error}</p>
                                ) : (
                                    <span>₦{balance.toLocaleString()}</span>
                                )}
                            </div>
                        </div>
                        

                        {/* Deposit and Withdrawal Cards */}
                        <div className="actions-container">
                            {/* Deposit Card */}
                            <div className="action-card" onClick={() => navigate("/deposit")}>
                                    <i className="fas fa-wallet card-icon"></i>
                                    <h3 className="card-title">Deposit</h3>
                                    <p className="card-description">Add funds to your wallet</p>
                            </div>


                             {/* Withdrawal Card */}
                             <div className="action-card" onClick={() => navigate("/withdrawal", {state: {balance} })}>
                                <i className="fas fa-money-check card-icon"></i>
                                <h3 className="card-title">Withdraw</h3>
                                <p className="card-description">Withdraw funds from your wallet</p>
                             </div>
                        </div>

                    </section>


                </section>
            <hr></hr>
            <InnerFooter />
            </article>
        </main>
    )
}

export default Wallet;