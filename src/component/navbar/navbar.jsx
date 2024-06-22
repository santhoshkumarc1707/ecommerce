import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import { Login } from '../../images/icons/login'
import { CartContext } from '../usecontext/cardStore'
import { useContext } from "react"
import './navbar.scss'

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const items = cartItems.length;
    return (
        <div>
            <div className="navmain_continer">
                <div className='logo_continar'>
                    <img src="src/assets/logo.svg" alt="comfy sloth" width={151} height={51} />
                </div>
                <div className="menu_container">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/product'>Product</Link></li>
                    </ul>

                </div>
                <div className="card_container">
                    <Link to={'/cart'} ><p>Cart</p></Link>
                    <Link to={'/cart'}><p><FontAwesomeIcon icon={faCartShopping} /></p></Link>
                    <span>{items}</span>
                    <p>login &nbsp; <Login /></p>

                </div>

            </div>



        </div>
    )
}

export default Navbar






