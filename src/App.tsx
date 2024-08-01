import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './pages/ScrollToTop';
import { CartProvider } from "./context/CartContext";

function App() {

  return (
    <CartProvider>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Shop' element={<Shop />} />
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/SingleProduct/:id' element={<SingleProduct />}/>
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>
    </CartProvider>
  )
}

export default App
