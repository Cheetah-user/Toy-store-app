import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";

function CategoryLayout() {
    return (
        <div className="category-container">
            <NavBar />
            <div className="category-page-banner">
                <h1>Category Name</h1>
                <p>Category Description</p>
            </div>
            <div className="products-containers">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}
export default CategoryLayout;