import { useNavigate } from "react-router-dom"
import Container from "../container/container"
import './feature.scss'



const Feature = () => {
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`product/single/${id}`)
    }
    const featured = [
        { "img": "src/assets/product-7.jpeg", "center": "Entertainment Center", "price": "$599.99", id: "recNZ0koOqEmilmoz" },
        { "img": "src/assets/product-11.jpeg", "center": "High-Back Bench", "price": "$333.99", id: "recrfxv3EwpvJwvjq" },
        { "img": "src/assets/product-8.jpeg", "center": "Modern Bookshelf", "price": "$319.99", id: "recoAJYUCuEKxcPSr" },
    ]
    return (
        <div>
            <div className='feature_container'>
                <Container>
                    <p>Featur<span>ed Pr</span>oducts</p>
                    <div className='feature'>
                        {
                            featured?.map((curr, idx) => (
                                <div key={idx} className="feature_product" >
                                    <div className='feature_img' onClick={() => handleNavigate(curr.id)}>
                                        <div className="overlay"></div>
                                        <div>
                                            <img src={curr.img} alt={curr.center} className='img' />
                                            <div className="find_icon" >
                                                <svg stroke="currentColor" fill="currentColor" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                            </div>
                                        </div>
                                    </div>
                                    <footer>
                                        <h5>{curr.center}</h5>
                                        <h4>{curr.price}</h4>
                                    </footer>
                                </div>

                            ))
                        }
                    </div>
                </Container>

                <button onClick={handleNavigate}>ALL PRODUCTS</button>
            </div>


        </div>
    )
}

export default Feature