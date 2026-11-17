import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
    return (
        <div className="sign-up-container">
            <NavBar /> 
            <div className="auth-card">
                <h2>The Toy Store</h2>
                <p>Sign up for an account</p>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Password Confirmation"/>
                    <button type="submit">Sign up</button>
                    <p className="sign-up-option">Already have an account? <Link to="/signin">Sign in here!</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp;