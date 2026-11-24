import { Link } from "react-router-dom";
import "./SignUp.css";
import { useState } from "react";

function SignUp() {
    const [isEmail, setIsEmail] = useState('');
    const [isUsername, setIsUsername] = useState('');
    const [isPassword, setIsPassword] = useState('');
    const [isConfirmedPassword, setIsConfirmedPassword] = useState('');
    const [error, setError] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(isPassword !== isConfirmedPassword){
          setError('Passwords do not match!');
          return;
        }else{
            setError('');
            console.log('Submitted');
        }
    }
    return (
        <div className="sign-up-container">
            <div className="auth-card">
                <h2>The Toy Store</h2>
                <p>Sign up for an account</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" value={isUsername} onChange={(e) => setIsUsername(e.target.value)}/>
                    <input type="email" placeholder="Email" value={isEmail} onChange={(e) => setIsEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={isPassword} onChange={(e) => setIsPassword(e.target.value)}/>
                    <input type="password" placeholder="Password Confirmation" value={isConfirmedPassword} onChange={(e) => setIsConfirmedPassword(e.target.value)}/>
                    <button type="submit">Sign up</button>
                    {error && <p>{error}</p>}
                    <p className="sign-up-option">Already have an account? <Link to="/signin">Sign in here!</Link></p>
                </form>
            </div>
        </div>
    )
}
export default SignUp;