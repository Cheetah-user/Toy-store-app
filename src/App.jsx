import { useState } from 'react';
import './App.css';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import CategoryLayout from './pages/Category/CategoryLayout';
import Checkout from './pages/Checkout/Checkout';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import NavBar from './components/NavBar/NavBar';

function App() {
    const [cart, setCart] = useState([]);
    /*Adds toy to cart. First checks if toy is already added, if it is increases amount. If not adds 1 to cart  */
    function addToCart(toy) {
      const existingToy = cart.find((item) => item.id === toy.id);
      if(existingToy){
        setCart(cart.map((item) => item.id === toy.id ? {...item, quantity: item.quantity + 1} : item))
      }else if(toy){
        setCart([...cart, {...toy, quantity: 1}]);
      }
    };
    
    /*Removes items from the cart*/
    function removeFromCart(toyId) {
      setCart(cart.filter((item) => item.id !== toyId))
    }

    /*Increases amount of items in cart*/
    function increaseQuantity(toyId) {
      setCart(cart.map((item) => item.id === toyId ? {...item, quantity: item.quantity + 1} : item))
    }

    /*Decreases amount of items in cart */
    function decreaseQuantity(toyId) {
      const existingToy = cart.find((item) => item.id === toyId);
      if(existingToy.quantity === 1){
        removeFromCart(toyId);
      }else{
         setCart(cart.map((item) => item.id === toyId ? {...item, quantity: item.quantity - 1} : item))
      }

    }

    /*Should Clear the cart icon when user completes a purchase in the checkout page */
    function clearCart(){
      setCart([]);
    }

    return (
        <BrowserRouter>
          <NavBar cart={cart}/>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart cart = {cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeFromCart={removeFromCart}/>}/>
            <Route path='/category/:name' element={<CategoryLayout/>}/>
            <Route path='/checkout' element={<Checkout cart = {cart} clearCart={clearCart}/>}/>
            <Route path='/product/:id' element={<ProductDetail addToCart={addToCart}/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>

          </Routes>
        </BrowserRouter>
    )
}

export default App
