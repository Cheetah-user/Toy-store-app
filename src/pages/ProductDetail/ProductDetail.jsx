//This should show the details of a product when a user clicks on it from the home page.
import NavBar from "../../components/NavBar/NavBar";
import { mockToys } from "../../data/mockToys";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetail() {
    const { id } = useParams();
    const toy = mockToys.find((item) => item.id === Number(id));
    if(!toy) return <h2>Toy not found!</h2>
    return (
        <div className="productdetail-container">
            <NavBar />
            <div className="product-details">
                <img src={toy.image} alt={toy.name}/>
                <div className="product-details-info">
                   <h2>{toy.name}</h2>
                   <p>{toy.description}</p>
                   <p>Price: ${toy.price}</p>
                   <button disabled= {toy.stock === 0}> Add To Cart</button>
                   {toy.stock === 0 && (
                    <p className="out-of-stock-msg">Sorry! This item is out of stock.</p>
                   )}
                </div>
            </div>
        </div>
    )
}
export default ProductDetail;