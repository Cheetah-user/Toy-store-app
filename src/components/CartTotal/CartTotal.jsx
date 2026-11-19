//This will keep tract of the total price of all items in cart and display it.
import "./CartTotal.css";

function CartTotal({ cart = [], children}){
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="cart-total-container">
            <h2>Cart Total</h2>
            <p>Subtotal: ${subtotal.toFixed(2)}</p>
            <p>Shipping: FREE</p>
            <h3>Total: ${subtotal.toFixed(2)}</h3>
            {children}
        </div>
    )
}

export default CartTotal;