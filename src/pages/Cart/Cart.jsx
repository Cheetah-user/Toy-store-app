import NavBar from "../../components/NavBar";
import CartItemsList from "../../components/CartItemsList";
import CartTotal from "../../components/CartTotal";

function Cart() {
    return (
        <div className="cart-page">
            <NavBar />
            <div className="grid-cart-details">
                <CartItemsList />
                <CartTotal/>           
            </div>
        </div>
    )
}
export default Cart; 