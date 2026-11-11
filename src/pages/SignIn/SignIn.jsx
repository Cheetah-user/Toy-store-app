import NavBar from "../../components/NavBar/NavBar";

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
                    <p className="sign-up-option">Don't have an account? <a href="/signup">Sign up here!</a></p>
                </form>
            </div>
        </div>
    )
}
export default SignIn; 