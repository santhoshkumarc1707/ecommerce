import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { Login } from '../../images/icons/login'
import { CartContext } from '../usecontext/cardStore'
import './navbar.scss';
import { useContext } from "react";

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div >
            <nav className="nav_cointainer">
                <div>
                    <Link><img src="src/assets/logo.svg" alt="comfy sloth" width={151} height={51} /></Link>
                </div>
                <div >
                    <ul className="url_cointainer">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/product'>Product</Link></li>
                    </ul>
                </div>
                <div className="card_cointainer">
                    <p>Cart</p> &nbsp;
                    <Link to={'/cart'}><p><FontAwesomeIcon icon={faCartShopping} /></p></Link>
                    <span>{cartItems.length}</span>
                    <p>login &nbsp; <Login /></p>
                </div>

            </nav>
        </div>

    )
}

export default Navbar