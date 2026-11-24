import { Link } from "react-router-dom";
import "./SignIn.css";
import { useState } from "react";

function SignIn() {
    const [isUsername, setIsUsername] = useState('');
    const [isPassword, setIsPassword] = useState('');

    function handleSubmit(e){
      e.preventDefault();
      console.log({isUsername, isPassword}); /*to see whether it works */
    }
    return (
        <div className="sign-in-container">
            <div className="auth-card">
                <h2>The Toy Store</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={isUsername} onChange={(e) => setIsUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" value={isPassword} onChange={(e) => setIsPassword(e.target.value)}/>
                    <button type="submit">Sign in</button>
                    <p className="sign-up-option">Don't have an account? <Link to="/signup">Sign up here!</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignIn; 