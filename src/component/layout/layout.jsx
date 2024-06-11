import { Outlet } from "react-router-dom"
import Navbar from "../navbar/navbar"
import Footer from "../../pages/footer/footer"


const Layout = () => {
    return (
        <div>
            <div className="nav_continar">
                <Navbar />
            </div>
            <div className="outlet_continar">
                <Outlet />
            </div>
            <div className="footer_continar">
                <Footer />
            </div>
        </div>
    )
}

export default Layout