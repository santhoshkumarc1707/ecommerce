
import Button from '../../component/button/button'
import './list.scss'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const List = ({ product = [] }) => {
    const navigate = useNavigate();
    const formatPrice = (price) => {
        const priceStr = price.toFixed(2).replace('.', '');
        const length = priceStr.length;
        const formattedPrice = `$${priceStr.substring(0, length - 6)},${priceStr.substring(length - 6, length - 4)}.${priceStr.substring(length - 4, length - 2)}`;
        return formattedPrice;
    };

    return (
        <div>
            {
                product?.map((curr, idx) => (
                    <div key={idx}>
                        <div className="img_container">
                            <div>
                                <img src={curr.image} alt={curr.name} width={363} height={225} />
                            </div>
                            <div className="detail_container">
                                <h5>{curr.name}</h5>
                                <h4>{formatPrice(curr.price)}</h4>
                                <p>{curr.description}</p>
                                <Button className="btn" onClick={() => { navigate(`single/${curr.id}`) }}>Details</Button>
                            </div>

                        </div>
                    </div>))

            }
        </div>
    )

}

export default List