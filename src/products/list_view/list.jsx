
import Button from '../../component/button/button'
import { Formatprice } from '../../component/fomatprice/formatprice';
import './list.scss'
import { useNavigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const List = ({ product = [] }) => {
    const navigate = useNavigate();


    return (
        <div>
            {
                product?.map((curr, idx) => (
                    <div key={idx}>
                        <div className="img_container">
                            <div>
                                <img src={curr.image} alt={curr.name} />
                            </div>
                            <div className="detail_container">
                                <h5>{curr.name}</h5>
                                <h4>{Formatprice(curr.price)}</h4>
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