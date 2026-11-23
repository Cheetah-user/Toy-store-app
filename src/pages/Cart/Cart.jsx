import CartItemsList from "../../components/CartItemsList/CartItemsList";
import CartTotal from "../../components/CartTotal/CartTotal";
import { Link } from "react-router-dom";
import "./Cart.css"; 

function Cart({cart = [], increaseQuantity, decreaseQuantity, removeFromCart}) {
    return (
        <div className="cart-details-page">
            <div className="grid-cart-checkout-details">
                <CartItemsList cart = {cart} increaseQuantity = {increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart}/>
                <CartTotal cart = {cart}> 
                   <Link to={"/checkout"}>
                     <button> Proceed to checkout</button>
                    </Link>   
                 </CartTotal>    
            </div>
        </div>
    )
}
export default Cart; 