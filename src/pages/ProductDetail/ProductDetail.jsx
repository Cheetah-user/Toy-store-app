//This should show the details of a product when a user clicks on it from the home page.
import NavBar from "../../components/NavBar/NavBar";

function ProductDetail() {
    return (
        <div className="productdetail-container">
            <NavBar />
            <div className="product-details">
                <img src="???" alt="Picture of product"/>
                <div className="product-details-info">
                   <h2>Product Name</h2>
                   <p>Product Description</p>
                   <p>Price: $0.00</p>
                   <button>Add To Cart</button>
                   <p className="out-of-stock-msg">Sorry! This item is out of stock.</p>
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;