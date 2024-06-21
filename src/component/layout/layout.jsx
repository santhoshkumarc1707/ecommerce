import Navbar from "../navbar/navbar"
import { Menu } from '../../images/icons/menu'
import { useState } from "react"
import './layout.scss'
// import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
// import { Login } from "../../images/icons/login"
//import { CartContext } from "../usecontext/cardStore"

const Layout = () => {
    const [menu, SetMenu] = useState('false')
    const handlemenu = () => {
        SetMenu((pre) => !pre)
    }
    // const { cartItems } = useContext(CartContext);
    return (
        <div className="main_container">
            <div>
                <Navbar />
            </div>
            <div className={`min_menu  ${menu ? 'view' : " "}`}>
                {/* <div className="mini_navmain_continer">
                    <div className='logo_continar'>
                        <img src="src/assets/logo.svg" alt="comfy sloth" width={151} height={51} />
                    </div>
                    <div className="mini_menu_container">
                        <ul>
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Product</Link></li>
                        </ul>

                    </div>
                    <div className="mini_card_container">
                        <p>Cart</p>
                        <Link to={'/cart'}><p><FontAwesomeIcon icon={faCartShopping} /></p></Link>
                        <span>{cartItems.length}</span>
                        <p>login &nbsp; <Login /></p>

                    </div>

                </div> */}


            </div>

            <div className="menubar" onClick={handlemenu}>
                <Menu />
            </div >
        </div>

    )
}

export default Layout