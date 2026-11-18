import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { mockToys } from "../../data/mockToys";

function CategoryLayout() {
    return (
        <div className="category-container">
            <NavBar />
            <div className="page-banner">
                <h1>Category Name</h1>
                <p>Category Description</p>
            </div>
            <div className="products-containers">
                {mockToys.map((toy) => (
                    <ProductCard key={toy.id} toy={toy}/>
                ))}
            </div>
        </div>
    )
}
export default CategoryLayout;