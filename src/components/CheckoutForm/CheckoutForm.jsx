function CheckoutForm() {
    return (
        <div className="checkout-form-container">
            <h2>Mailing Details:</h2>
            <form className="checkout-form-details">
                <input type="text" placeholder="Address" required/>
                <input type="text" placeholder="Country" required/>
                <input type="text" placeholder="ZIP Code" required/>
                <select className="payment-method" required>
                    <option>Credit Card</option>
                    <option>Cookies</option>
                    <option>Cash</option>
                </select>

            </form>

        </div>
    )
}

export default CheckoutForm;