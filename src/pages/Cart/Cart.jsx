import NavBar from "../../components/NavBar/NavBar";
import CartItemsList from "../../components/CartItemsList/CartItemsList";
import CartTotal from "../../components/CartTotal/CartTotal";
import "./Cart.css"; 

function Cart() {
    return (
        <div className="cart-details-page">
            <NavBar />
            <div className="grid-cart-checkout-details">
                <CartItemsList />
                <CartTotal/>           
            </div>
        </div>
    )
}
export default Cart; 