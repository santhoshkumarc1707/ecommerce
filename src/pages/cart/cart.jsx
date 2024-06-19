import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../component/usecontext/cardStore';
import Button from '../../component/button/button'
import { Link, useNavigate } from 'react-router-dom';
import { Delete } from '../../images/icons/delete';
import './cart.scss';
import { Spinner } from '../../images/icons/spinner';
const Cart = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const { cartItems, addToCart, deleteFromCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext);
    const handleDelet = (item) => {
        deleteFromCart(item);
    }
    return (
        <div>
            {isLoading ? <Spinner /> : (
                <>
                    {cartItems.length > 0 ? (
                        <>
                            <div className='head_continar'>
                                <h3><Link to="/">Home</Link> /Cart</h3>
                            </div>
                            <div className='header_content' >
                                <h5>Item</h5>
                                <h5>Price</h5>
                                <h5>Quantity</h5>
                                <h5>Subtotal</h5>
                                <h5>Delete</h5>
                            </div>
                            <hr className='hr_tag' />
                            {cartItems.map((curr, idx) =>
                                <div key={idx} className='cart_container'>
                                    <div className='img_cart_container' >
                                        <img src={curr?.images?.[0].url} width={100} height={75} />
                                        <div>
                                            <p>{curr.name}</p>
                                            <span>color:<button style={{ background: curr.selectedColor }} className='color_btn'></button></span>
                                        </div>
                                    </div>
                                    <p className='price_cointainer'> {curr.price}</p>
                                    <div className='card_toggle'>
                                        <Button onClick={() => removeFromCart(curr)}>-</Button>
                                        <p>{curr.quantity}</p>
                                        <Button onClick={() => addToCart(curr)}>+  </Button>
                                    </div>
                                    <div className='sub_total'>
                                        <p>${curr.total}</p>
                                    </div>

                                    <div onClick={() => handleDelet(curr)} className='delet_container'>
                                        <Delete />
                                    </div>
                                </div>)}
                            <hr className='hr_tag' />
                            <Button onClick={() => navigate('/product')} className='continue_btn'  >Continue Shopping</Button>
                            <Button onClick={() => clearCart()} className='shop_btn' >clear a shopping card</Button>
                            <div className='total_container'>
                                <h3>Subtotal :${getCartTotal()}</h3>
                                <h3>Shipping Fee :  $5.34</h3>
                                <hr />
                                <h2>Order Total:${getCartTotal()}</h2>
                            </div>
                            <Button className="signin_button">sign_in</Button>
                        </>) : (
                        <div className='fill_tag'>
                            <h1 >your card is empty </h1>
                            <Button onClick={() => navigate('/product')}  >FILL IT</Button>
                        </div>
                    )}
                </>)}
        </div>
    )
}

export default Cart