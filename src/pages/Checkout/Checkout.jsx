import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartTotal from "../../components/CartTotal/CartTotal";

function Checkout() {
    return (
        <div className="checkout-details-page">
            <div className="grid-cart-checkout-details">
                <CheckoutForm/>
                <CartTotal/>
            </div>

        </div>
    )
}
export default Checkout;