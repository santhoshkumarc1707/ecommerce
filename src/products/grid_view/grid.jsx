import { useNavigate } from "react-router-dom";
import './grid.scss'

// eslint-disable-next-line react/prop-types
const Grid = ({ product = [] }) => {
    const navigate = useNavigate()
    const formatPrice = (price) => {
        const priceStr = price.toFixed(2).replace('.', '');
        const length = priceStr.length;
        const formattedPrice = `$${priceStr.substring(0, length - 6)},${priceStr.substring(length - 6, length - 4)}.${priceStr.substring(length - 4, length - 2)}`;
        return formattedPrice;
    };

    return (
        <div className="pic_container">
            {product?.map((curr, idx) =>
            (<div key={idx}>
                <div className="img_content" onClick={() => navigate(`single/${curr.id}`)}>
                    <img src={curr.image} alt={curr.name} className="img" />
                    <div className="layover"></div>
                    <span className="find_icon"  >
                        <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </span>
                </div>
                <div className="footer_container">
                    <h5>{curr.name}</h5>
                    <p>{formatPrice(curr.price)}</p>

                </div>
            </div>))
            }

        </div >
    )
}

export default Grid