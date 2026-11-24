import "./CheckoutForm.css";
import { useState } from "react";

function CheckoutForm() {
    const [isAddress, setIsAddress] = useState('');
    const [isCountry, setIsCountry] = useState('');
    const [isZip, setIsZip] = useState('');
    const [isPayment, setIsPayment] = useState('Credit Card');
    const [orderSubmitted, setOrderSubmitted] = useState(false);
    
    function handleOrder(e){
      e.preventDefault();
      setOrderSubmitted(true);
    }
    return (
        <div className="checkout-form-container">
            <h2>Mailing Details:</h2>
            <form id="checkout-form" onSubmit={handleOrder}>
                <input value={isAddress} onChange={(e) => setIsAddress(e.target.value)} type="text" placeholder="Address" required/>
                <input value={isCountry} onChange={(e) => setIsCountry(e.target.value)} type="text" placeholder="Country" required/>
                <input value={isZip} onChange={(e) => setIsZip(e.target.value)} type="text" placeholder="ZIP Code" required/>
                <select value={isPayment} onChange={(e) => setIsPayment(e.target.value)} className="payment-method" required>
                    <option>Credit Card</option>
                    <option>Cookies</option>
                    <option>Cash</option>
                </select>

            </form>
            {orderSubmitted && <p>Thank you! Your order has been placed.</p>}
        </div>
    )
}

export default CheckoutForm;
