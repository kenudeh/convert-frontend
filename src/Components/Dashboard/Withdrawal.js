import React, { useState } from "react";
import TopMenuBar from './TopMenuBar';
import SideMenuBar from "./SideMenuBar";
import InnerFooter from "./InnerFooter";
import UserIcon from "./UserIcon";
import './Styles/Base.css';
import './Styles/withdrawal.css';
import { useNavigate, useLocation } from "react-router-dom";


// Define the base URL for the API
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;


const Withdrawal = () => {

    // State declarations
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)
    const [isConfirming, setIsConfirming] = useState(false); // For confirmation step
    const navigate = useNavigate();

    // Access balance from location state
    const { state: locationState } = useLocation(); // renaming the location variable to something else when destructuring it from useLocation.
    const balance = locationState?.balance || 0; // Access balance safely

    const handleWithdrawal = async () => {
        if (!amount || isNaN(amount)) {
            setError("Please enter a valid amount.");
            return;
        }

        if (parseFloat(amount) > balance) {
            setError("Insuffucient balance.");
            return;
        }

        setIsConfirming(true); //Show confirmation step
    }


    const confirmWithdrawal = async () => {
        setIsLoading(true);
        setError(null);

        try {
            // Making a withdrawal request 
            const response = await fetch(`${API_BASE_URL}/api/withdrawal`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
                body: JSON.stringify({ amount: parseFloat(amount) }),
            });

            // If no response
            if(!response) {
                throw new Error("Withdrawal failed. Please try again");
            }

            // If there is a response, save the response to a 'data' variable and convert it to JSON
            const data = await response.json();
            console.log("Withdrawal successful:", data);
            navigate("/wallet"); // Redirect to wallet after successful withdrawal
        } catch (error) {
            console.error("Error withdrawing funds:", error)
            setError(error.message)
        } finally {
            setIsLoading(false);
            setIsConfirming(false);
        }
    };
    
    return(
        <main className='dynamic-contents'>
            <TopMenuBar />
            <SideMenuBar />
            {/* Main Content */}
            <article className='main-content'>
                <section className='top-section'>
                    <h2>Withdrawal</h2>
                    <UserIcon />
                    <section className='balance'>
                        <p>Balance: ₦0.00</p>
                    </section>
                </section>
                <hr></hr>

                <section className='content'>
                    <section className='intro'>
                        <p>Withdraw funds to your bank account.</p>
                        <section className='balance'>
                            <p>Balance: ₦0.00</p>
                        </section>
                    </section>

                    <section className=".withdrawal-container">
                        <input
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                        {error && <p className="error-message">{error}</p>}
                        <button onClick={handleWithdrawal} disabled = {isLoading}>
                            {isLoading ? "Processing..." : "Withdraw"}
                        </button>

                        {/* Confirmation Modal */}
                        {isConfirming && (
                            <div className="confirmation-modal">
                                <p>Are you sure you want to withdraw ₦{amount}?</p>
                                <button onClick={confirmWithdrawal}>Confirm</button>
                                <button onClick={() => setIsConfirming(false)}>Cancel</button>
                            </div>
                        )}
                    </section>


                </section>
            <hr></hr>
            <InnerFooter />
            </article>
        </main>
    )
}

export default Withdrawal;