import ProductCard from "../../components/ProductCard/ProductCard";
import { mockToys } from "../../data/mockToys";
import { useParams } from "react-router-dom";

function CategoryLayout() {
    const {name} = useParams();
    const filteredCategory =  mockToys.filter((toy) => toy.category.toLowerCase() === name.toLowerCase())
    return (
        <div className="category-container">
            <div className="page-banner">
                <h1>{name}</h1>
                <p>Category Description</p>
            </div>
            <div className="products-containers">
                {filteredCategory.map((toy) => (
                    <ProductCard key={toy.id} toy={toy}/>
                ))}
            </div>
        </div>
    )
}
export default CategoryLayout;