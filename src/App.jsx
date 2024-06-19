import Navbar from "./component/navbar/navbar"
import Home from '../src/pages/home/home'
import About from '../src/pages/About/about'
import Product from '../src/pages/product/product'
import Footer from './component/footer/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Single from "./pages/single_page/single"
import Cart from "./pages/cart/cart"
const App = () => {
    
    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" >
                        <Route index element={<Product />} />
                        <Route path="single/:id" element={<Single />} />
                    </Route>
                    <Route path="cart" element={<Cart />} />

                </Routes>
                <Footer />
            </BrowserRouter>


        </div>
    )
}

export default App