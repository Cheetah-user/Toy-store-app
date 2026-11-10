//Should keep track of items user adds to the cart and display them in the cart page.
function CartItemsList(){
    return (
        <div className="cart-item-list">
            <img src="???" alt= "Cart Item"/>
            <h3>Cart Item</h3>
            <p>$0.00</p>
            <div className="item-amount-buttons">
              <button>[-]</button>
              <span>0</span>
              <button>[+]</button>
            </div>
            <button className="remove-item-button">Remove Item</button>
        </div>
    )
}

export default CartItemsList;