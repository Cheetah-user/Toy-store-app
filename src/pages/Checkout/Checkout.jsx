import NavBar from "../../components/NavBar/NavBar";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import CartTotal from "../../components/CartTotal/CartTotal";

function Checkout() {
    return (
        <div className="checkout-details-page">
            <NavBar />
            <div className="grid-cart-checkout-details">
                <CheckoutForm/>
                <CartTotal/>
            </div>

        </div>
    )
}
export default Checkout;