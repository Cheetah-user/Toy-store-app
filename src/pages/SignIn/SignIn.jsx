import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <div className="sign-in-container">
            <NavBar />
            <div className="sign-in-form">
                <h2>The Toy Store</h2>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button type="submit">Sign in</button>
                    <p className="sign-up-option">Don't have an account? <Link to="/signup">Sign up here!</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignIn; 