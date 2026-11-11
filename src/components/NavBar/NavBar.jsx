import { Link } from "react-router-dom";
import { use, useState } from "react";

function NavBar(){
    const [isDropdown, setIsDropdown] = useState(false);
    return (
        <nav className="nav-bar">
            <div className="toy-store-logo">
                <p>The Toy Store</p>
            </div>
            <div className="nav-bar-links">
                <Link to="/">Home</Link>
                <div className="dropdown-button">
                    <button onClick={() => setIsDropdown(!isDropdown)}>
                       Toys 
                    </button>
                    {isDropdown && (
                        <div className="dropdown-menu">
                            <Link to="/category/dolls">Dolls</Link> /* A test category link */ 
                        </div>
                    )}
                </div>
                <Link to="/">About Us</Link>
                <Link to="/cart">🛒 Cart (0)</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>

        </nav>
    )
}

export default NavBar;