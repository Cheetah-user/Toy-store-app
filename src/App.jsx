import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import CategoryLayout from './pages/Category/CategoryLayout';
import Checkout from './pages/Checkout/Checkout';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';

function App() {
    return (
        <BrowserRouter>
          <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/category/:name' element={<CategoryLayout/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/>
            <Route path='/signin' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>

          </Routes>
        </BrowserRouter>
    )
}

export default App
