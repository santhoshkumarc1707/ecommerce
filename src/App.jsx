import Navbar from "./component/navbar/navbar"
import Home from '../src/pages/home/home'
import About from '../src/pages/About/about'
import Product from '../src/pages/product/product'
import Footer from './component/footer/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App = () => {
    return (
        <div>

            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="product" element={<Product />} />
                </Routes>
                <Footer />
            </BrowserRouter>


        </div>
    )
}

export default App