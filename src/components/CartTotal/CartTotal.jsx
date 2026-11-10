//This will keep tract of the total price of all items in cart and display it.
function CartTotal(){
    return (
        <div className="cart-total-container">
            <h2>Cart Total</h2>
            <p>Subtotal: $0.00</p>
            <p>Shipping: FREE</p>
            <h3>Total: $0.00</h3>
            <button className="checkout-button">Checkout</button>
        </div>
    )
}

export default CartTotal;