import NavBar from "../../components/NavBar/NavBar";
import CartItemsList from "../../components/CartItemsList/CartItemsList";
import CartTotal from "../../components/CartTotal/CartTotal";
import { Link } from "react-router-dom";
import "./Cart.css"; 

function Cart() {
    return (
        <div className="cart-details-page">
            <NavBar />
            <div className="grid-cart-checkout-details">
                <CartItemsList />
                <CartTotal> 
                   <Link to={"/checkout"}>
                     <button> Proceed to checkout</button>
                    </Link>   
                 </CartTotal>    
            </div>
        </div>
    )
}
export default Cart; 