//Should keep track of items user adds to the cart and display them in the cart page.
import "./CartItemsList.css";

function CartItemsList({cart = []}){
    if(cart.length === 0){
        return <p>Your cart is empty.</p>
    }
    return (
        <div className="cart-items-wrapper">
            {cart.map((item) => (
              <div className="cart-item-list" key={item.id}>
                <img src= {item.image} alt= {item.name}/>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <div className="item-amount-buttons">
                  <button>[-]</button>
                    <span>{item.quantity}</span>
                  <button>[+]</button>
                </div>
                <button className="remove-item-button">Remove Item</button>
              </div>
            ))}
        </div>
    )
}

export default CartItemsList;