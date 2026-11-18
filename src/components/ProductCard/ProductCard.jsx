import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({toy}){
    return (
        <Link to= {`/product/${toy.id}`}>
          <div className="product-card-container">
              <img src={toy.image} alt={toy.name}/>
              <h3>{toy.name}</h3>
          </div>
        </Link>
    )
}

export default ProductCard;