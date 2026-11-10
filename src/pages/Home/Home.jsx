import NavBar from "../../components/NavBar";
import ProductCard from "../../components/ProductCard";

function Home() {
    return (
        <div className="home-page-container">
            <NavBar />
            <div className="home-page-banner">
                <h1>The Toy Store</h1>
                <p>Find your child's forever friend!</p>
            </div>
            <div className="products-containers">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

        </div>
    )
}
export default Home;