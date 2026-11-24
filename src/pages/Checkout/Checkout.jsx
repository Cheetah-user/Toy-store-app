import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartTotal from "../../components/CartTotal/CartTotal";

function Checkout() {
    return (
        <div className="checkout-details-page">
            <div className="grid-cart-checkout-details">
                <CheckoutForm/>
                <CartTotal>
                    <button type="submit" form="checkout-form">Complete Order</button>
                </CartTotal>
            </div>

        </div>
    )
}
export default Checkout;
