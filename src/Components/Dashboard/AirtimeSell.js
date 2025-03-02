import React, {useEffect, useState } from 'react';
import TopMenuBar from './TopMenuBar';
import SideMenuBar from './SideMenuBar';
import InnerFooter from './InnerFooter';
import UserIcon from './UserIcon';
import './Styles/Sell.css'


// Define the base URL for the API
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;



const AirtimeSell = () => {
    //state to manage form data
    const [formData, setFormData] = useState({
        network_type: 'mtn', // Default to MTN
        amount: '',
        phone_number: '',
        type: 'sell_airtime', // Default value
    });

    // State to manage payable amount
    const [payableAmount, setPayableAmount] = useState(0);

    // State to manage transaction details after API call
    const [transaction, setTransaction] = useState(null);

    // State to manage loading state during API call
    const [isLoading, setIsloading] = useState(false);

    // State to manage error messages
    const [error, setError] = useState(null);




    // Calculate payable amount whenever amount or network-type changes
    useEffect(() => {
        const amount = parseFloat(formData.amount);
        if (!isNaN(amount) && amount >= 1000) { 
            const discount = formData.network_type === 'mtn' ? 0.1 : 0.15; // 10% for MTN, 15% for Airtel
            setPayableAmount(amount - amount * discount); // Subtract discount from the amount
        } else {
            formData.amount = '';
            formData.phone_number = '';
            setPayableAmount(0);
        }
    }, [formData.amount, formData.network_type, formData]);


     // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsloading(true);
        setError(null);

        // Validate inputs
        if (formData.amount < 1000) {
            setError('Amount must be at least 1000.');
            setIsloading(false);
            return;
        }

        if (!formData.phone_number || formData.phone_number.length !== 11) {
            setError('Phone number must be 11 digits.');
            setIsloading(false);
            return;
        }

        if (payableAmount <= 0) {
            setError('Payable amount cannot be zero, please adjust the Amount field')
            setIsloading(false);
            return;
        }

        try {
            // Make API call to create transaction
            const response = await fetch(`${API_BASE_URL}/api/create-transaction`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('access_token')}` // Include access token
                },
                body: JSON.stringify(formData),
            });


            if (!response.ok) throw new Error('Failed to create transaction');

            // Parse the response and update transaction state
            const data = await response.json();
            setTransaction(data);
            setFormData({ ...formData, amount: '', phone_number: ''}); // Reset form
        } catch (error) {
            setError(error.message || 'An error occured. Please try again');
        } finally {
            setIsloading(false);
        }
    };


    // Format date to a user-friendly format
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year:'numeric' });
    };


    // Copy phone number to clipboard
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };


 
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
                    <UserIcon />
                    <section className='balance'>
                        <p>Balance: ₦0.00</p>
                    </section>
                </section>
                <hr></hr>

                <section className='content'>
                    <section className='intro'>
                        <p>Convert airtime to cash</p>
                        <section className='balance'>
                            <p>Balance: ₦0.00</p>
                        </section>
                    </section>

                    <div className='container'>
                        {/* Form inputs */}
                        <form onSubmit={handleSubmit} className='form'>
                            {/* Network Type */}
                            <div className='formGroup'>
                                <label className='label'>Network Type:</label>
                                <select
                                    name='network_type'
                                    value={formData.network_type}
                                    onChange={(e) => setFormData({ ...FormData, network_type: e.target.value })}
                                    className='input'
                                >
                                    <option value='mtn'>MTN</option>
                                    <option value='airtel'>Airtel</option>
                                </select>
                            </div>

                            {/* Amount */}
                            <div className='formGroup'>
                                <label className='label'>Amount</label>
                                <input
                                    type='number'
                                    name='amount'
                                    value={formData.amount}
                                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                                    min='1000'
                                    required
                                    className='input'
                                />    
                                 {/* Payable Amount */}
                                <div className='payableAmount'>
                                    <p className='text'>Payable Amount: ₦{payableAmount.toFixed(2)}</p>
                                </div>                        
                            </div>


                           


                            {/* Phone Number */}
                            <div className='formGroup'>
                                <label className='label'>Phone Number:</label>
                                <input
                                    type='text'
                                    name='phone_number'
                                    value={formData.phone_number}
                                    onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                    pattern='\d{11}'
                                    required
                                    className='input'
                                    placeholder='Enter phone number'
                                />  
                                <p className='note'>Note: This is the phone number from which you'll transfer airtime.</p>
                            </div>

                            {/* Submit Button */}
                            <div className='formGroup'>
                                <button type='submit' disabled={isLoading} className='button'>
                                    {isLoading ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>

                        {/* Error Message */}
                        {error && <p className='error'>{error}</p>}


                         {/* Transaction Ticket */}
                         { transaction && (
                            <div className='ticket'>
                                <h2 className='ticketHeading'>Transaction Details</h2>
                                <p className='ticketText'>Transaction ID: {transaction.transaction_id}</p>
                                <p className='ticketText'>Amount: ₦{transaction.amount}</p>
                                <p className='ticketText'>Created At: {formatDate(transaction.created_at)}</p>
                                <p className='ticketText'>Status: {transaction.status}</p>
                                <p className='ticketText'>
                                Please transfer airtime worth ₦{transaction.amount} to {transaction.phone_number} on the{' '} {transaction.network_type.toUpperCase()} network.
                                </p>
                                <button onClick={() => copyToClipboard(transaction.phone_number)} className='copyButton'>
                                    Copy Phone Number
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

export default AirtimeSell
