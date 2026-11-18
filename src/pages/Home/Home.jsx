import NavBar from "../../components/NavBar/NavBar";
import ProductCard from "../../components/ProductCard/ProductCard";
import { mockToys } from "../../data/mockToys";
import "./Home.css"

function Home() {
    return (
        <div className="home-page-container">
            <NavBar />
            <div className="page-banner">
                <h1>The Toy Store</h1>
                <p>Find your child's forever friend!</p>
            </div>
            <div className="products-containers">
                {mockToys.map((toy) => (
                    <ProductCard key={toy.id} toy={toy}/>
                ))}
            </div>

        </div>
    )
}
export default Home;