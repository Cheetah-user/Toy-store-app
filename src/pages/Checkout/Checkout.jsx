import NavBar from "../../components/NavBar";
import CheckoutForm from "../../components/CheckoutForm";
import CartTotal from "../../components/CartTotal";

function Checkout() {
    return (
        <div className="checkout-container">
            <NavBar />
            <div className="grid-checkout-details">
                <CheckoutForm/>
                <CartTotal/>
            </div>

        </div>
    )
}
export default Checkout;