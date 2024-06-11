import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom";
import { Login } from '../../images/icons/login'

import './navbar.scss';

const Navbar = () => {
    return (
        <div >
            <nav className="nav_cointainer">
                <div>
                    <Link><img src="src/assets/logo.221f6b13e6eaaad5828372464f73a1a4.svg" alt="comfy sloth" width={151} height={51} /></Link>
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
                    <p><FontAwesomeIcon icon={faCartShopping} /></p>
                    <span>0</span>&nbsp;&nbsp;&nbsp;
                    <p>login &nbsp; <Login /> </p>
                </div>

            </nav>
        </div>

    )
}

export default Navbar