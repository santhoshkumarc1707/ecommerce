import { Link, useNavigate, useParams } from 'react-router-dom';
import './single.scss';
import { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../component/button/button';
import { CartContext } from '../../component/usecontext/cardStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Correct } from '../../images/icons/correct';
import { Spinner } from '../../images/icons/spinner';
import { Formatprice } from '../../component/fomatprice/formatprice';

const Single = () => {
    const { addToCart } = useContext(CartContext);
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(1);
    const [active, setActive] = useState(null);
    const [activeImg, setActiveImg] = useState(0);
    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedImg, setSelectedImg] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const getAPIData = useCallback(async () => {
        try {
            const response = await axios.get(`https://www.course-api.com/react-store-single-product?id=${id}`);
            setData(response.data);
            setSelectedImg(response.data.images[0].url || '');
            setActive(response.data.colors[0]);
            setIsLoading(false);
        } catch (error) {
            console.log(error.message, "error");
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        getAPIData();
    }, [getAPIData]);

    const increment = () => {
        if (counter < data.stock)
            setCounter(prev => prev + 1);
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(prev => prev - 1);
        }
    }

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    style={{ color: i <= rating ? '#ffc107' : '#e4e5e9' }}
                />
            );
        }
        return stars;
    };

    const handleClick = (color) => {
        setActive(color);
    }

    const handleCart = () => {
        const cartData = { ...data, selectedColor: active, count: counter, total: counter * data?.price, quantity: counter };
        addToCart(cartData);
        navigate('/cart');
       
    }
    const handleChangeImage = (src, key) => {
        setSelectedImg(src);
        setActiveImg(key);
    }

    return (
        <>
            <div className='single_container'>
                {isLoading ? <Spinner /> : (
                    <>
                        <div className='head_continar'>
                            <h3><Link to="/">Home</Link>/ <Link to='/product'> Product</Link>/ {data.name}</h3>
                        </div>
                        <Button onClick={() => navigate('/product')} className='button_compound'>BACK TO PRODUCTS</Button>
                        <div className='single_content'>
                            <div className='image_container'>
                                <img src={selectedImg} alt={data?.name} className='img' />
                                <div className='sub_image_container'>
                                    {data?.images?.map((curr, idx) => (
                                        <img
                                            key={idx}
                                            className='smallimg'
                                            src={curr.thumbnails?.small?.url}
                                            alt={data?.name}
                                            style={{ border: activeImg === idx ? "2px solid #AB7A5F" : "" }}
                                            onClick={() => handleChangeImage(curr.thumbnails?.small?.url, idx)}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className='details_container'>
                                <h4>{data?.name}</h4>
                                <span>{renderStars(data?.stars)} ({data?.reviews} customer reviews) </span>
                                <h2>{Formatprice(data?.price)}</h2>
                                <p>{data?.description}</p>
                                <p>Available: {data?.stock ? "In stock" : "Out of stock"}</p>
                                <h3>SKU: {data?.id}</h3>
                                <p>Brand: {data?.company}</p>
                                <hr className='hr_tag' />
                                {data?.stock ? (
                                    <>
                                        <label>Colors:</label>
                                        {data?.colors?.map((color, idx) => (
                                            <button
                                                key={idx}
                                                className={`color_btn ${active === color ? "active" : ""}`}
                                                style={{ background: color }}
                                                onClick={() => handleClick(color)}
                                            >
                                                {active === color && <Correct />}
                                            </button>
                                        ))}
                                        <div className='quantity_container'>
                                            <button onClick={decrement} >-</button>
                                            <span>{counter}</span>
                                            <button onClick={increment} >+</button>
                                        </div>
                                        <button onClick={handleCart} className='cart_btn'>Add to cart</button>
                                    </>
                                ) : (<></>)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default Single;
