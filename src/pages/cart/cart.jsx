import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../component/usecontext/cardStore'
import Button from '../../component/button/button';
import { Link, useNavigate } from 'react-router-dom';
import { Delete } from '../../images/icons/delete';
import { Spinner } from '../../images/icons/spinner';
import { Formatprice } from '../../component/fomatprice/formatprice';
import './cart.scss';

const Cart = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);


    const { cartItems, addToCart, deleteFromCart, removeFromCart, getCartTotal, clearCart } = useContext(CartContext)


    const getCartTotalWithShipping = () => {
        return getCartTotal() + 534;
    };
    console.log(cartItems.quantity);
    return (
        <div>
            {isLoading ? <Spinner /> : (
                <>
                    {cartItems.length > 0 ? (
                        <>
                            <div className='head_continar'>
                                <h3><Link to="/">Home</Link>/ Cart </h3>
                            </div>
                            <div className='header_content'>
                                <h5>Item</h5>
                                <h5>Price</h5>
                                <h5>Quantity</h5>
                                <h5>Subtotal</h5>
                            </div>
                            <hr className='hr_tag' />
                            {cartItems?.map((curr, idx) => (
                                <div key={idx} className='cart_container'>
                                    <div className='img_cart_container'>
                                        <img src={curr?.images[0].url} width={100} height={75} alt={curr.name} />
                                        <div>
                                            <p>{curr.name}</p>
                                            <span>Color: <button style={{ background: curr.selectedColor }} className='color_btn'></button></span>
                                        </div>
                                    </div>
                                    <h3 className='price_container'>{Formatprice(curr.price)}</h3>
                                    <div className='cart_toggle'>
                                        <Button onClick={() => removeFromCart(curr)} disabled={curr.quantity === 1}>-</Button>
                                        <p>{curr.quantity}</p>
                                       
                                        <Button onClick={() => addToCart(curr)} disabled={curr.quantity === curr.stock}>+</Button>
                                    </div>
                                    <div className='sub_total'>
                                        <p>{Formatprice(curr.total)}</p>
                                    </div>
                                    <div onClick={() => deleteFromCart(curr)} className='delete_container'>
                                        <Delete />
                                    </div>
                                </div>
                            ))}
                            <hr className='hr_tag' />
                            <Button onClick={() => navigate('/product')} className='continue_btn'>Continue Shopping</Button>
                            <Button onClick={() => clearCart()} className='shop_btn'>Clear Shopping Cart</Button>
                            <div className='total_container'>
                                <h3>Subtotal: <span> {Formatprice(getCartTotal())}</span></h3>
                                <h4>Shipping Fee: <span> $5.34</span></h4>
                                <hr />
                                <h2>Order Total:<span> {Formatprice(getCartTotalWithShipping())}</span></h2>
                            </div>
                            <Button className="signin_button">Sign In</Button>
                        </>
                    ) : (
                        <div className='fill_tag'>
                            <h1>Your cart is empty</h1>
                            <Button onClick={() => navigate('/product')}>FILL IT</Button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Cart;
