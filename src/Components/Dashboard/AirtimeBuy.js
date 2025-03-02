import TopMenuBar from "./TopMenuBar";
import SideMenuBar from "./SideMenuBar";
import InnerFooter from "./InnerFooter";
import UserIcon from "./UserIcon";
import React, { useState } from "react";
import './Styles/Buy.css'


// Define the base URL for the API
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;


const AirtimeBuy = () => {

    const [formData, setFormData] = useState({
        network_type: 'mtn', // Default to MTN
        amount: '',
        phone_number: '',
        type: 'buy_airtime', // Default value
    });

    const [message, setMessage] = useState('');

    const [isError, setIsError] = useState(false);

    const [isLoading, setIsloading] = useState(false)

    const [showSuccessDialog, setShowSuccessDialog] = useState(false)

    const [transactionDetails, setTransactionDetails] = useState(null) // Store transaction details



    // function to handle change - will be called on phone_number and amount fields in the form
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    };


    // Function to validate the form entries
    const validateForm = () => {
        const {phone_number, amount} = formData;

        // Validate phone number (must be exactly 11 diits)
        if (phone_number.length !== 11 || isNaN(phone_number)) {
            setMessage("Phone number must be exactly 11 digits.");
            setIsError(true);
            return false;
        }

        // Validate amount (must not exceed 6 digits)
        if (amount.length > 6 || isNaN(amount)) {
            setMessage('Amount must not exceed ₦100,000');
            setIsError(true);
            return false;
        }

        return true;
    };



    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate for fields
        if (!validateForm()) {
            return;
        }

        // Setting initial values for the loading state and message
        setIsloading(true);
        setMessage('');

        // Calling the API for form data storage
        try{
            const response = await fetch(`${API_BASE_URL}/api/create-transaction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}` // Include access token
                },
                body: JSON.stringify(formData),
            });

            

            const result = await response.json();

            // Check if the response contains an error
            if (!response.ok || result.error) {
                throw new Error(result.message || 'Failed to submit transaction.');
            }


            // If no error, proceed with success
            setMessage("Transaction submitted successfully!");
            setIsError(false)
            setTransactionDetails(result) // Store transaction details
            setShowSuccessDialog(true); // Show success dialog
            resetForm();
            console.log("API Response:", result);
        } catch (error) {
            setMessage(error.message || 'Error submitting transaction. Please try again');
            setIsError(true);
            console.log('API Error:', error);
        } finally {
            setIsloading(false);
        }
    };


    // Resetting the form after subimssion
    const resetForm = () => {
        setFormData({
            phone_number: '',
            network_type: 'mtn',
            type: 'buy_airtime',
            amount: '',
        });
    };


    // Closing dialog box
    const closeSuccessDialog = () => {
        setShowSuccessDialog(false);
        setTransactionDetails(null); // Clear transaction details
    };

  



    return(
        <main className='dynamic-contents'>
            {/* Top Menu (Desktop) */}
            <TopMenuBar />
            {/* Side Menu (Desktop) */}
            <SideMenuBar />
            {/* Main Content */}
            <article className='main-content'>
                <section className='top-section'>
                    <h2>Buy Airtime</h2>
                    <UserIcon />
                    <section className='balance'>
                        <p>Balance: ₦0.00</p>
                    </section>
                </section>
                <hr></hr>

                <section className='content'>
                    <section className='intro'>
                        <p>Submit an airtime purchase request</p>
                        <section className='balance'>
                            <p>Balance: ₦0.00</p>
                        </section>
                    </section>

                    <div className="form-container">
                        <form onSubmit={handleSubmit} className="transaction-form">

                            <div className="form-group">
                                <label>Network Type:</label>
                                <select
                                    name="network_type"
                                    value={formData.network_type}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value='mtn'>MTN</option>
                                    <option value='airtel'>Airtel</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Phone Number:</label>
                                <input
                                    type="text"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    maxLength={11}
                                    required 
                                />
                            </div>

                            <div className="form-group">
                                <label>Amount:</label>
                                <input
                                     type="number"
                                     name="amount"
                                     value={formData.amount}
                                     onChange={handleChange}
                                     maxLength={6}
                                     required 
                                />
                            </div>

                            <button type="submit" disabled={isLoading} className="submit-button">
                                {isLoading ? 'Submitting' : 'Submit'}
                            </button>
                        </form>

                        {/* Error Message */}
                        {message && isError && <div className="error-message">{message}</div>}

                        {/* Success Dialog */}
                        {showSuccessDialog && (
                            <div className="success-dialog">
                                <p className="success-message">{message}</p>
                                {transactionDetails && (
                                    <div className="transaction-details">
                                        <p><strong>Transaction ID:</strong> {transactionDetails.transaction_id}</p>
                                        <p><strong>Status:</strong> {transactionDetails.status}</p>
                                        <p><strong>Amount:</strong> {transactionDetails.amount}</p>
                                    </div>
                                )}
                                <button onClick={closeSuccessDialog} className="close-button">
                                    Finish
                                </button>
                            </div>
                        )}
                    </div>
                   
                
                </section>
            <hr></hr>
            <InnerFooter />
            </article>
            

        </main>
        
    )
}

export default AirtimeBuy;