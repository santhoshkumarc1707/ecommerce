
import { Link } from 'react-router-dom'
import './product.scss'
import Container from '../../products/main/container'




const Product = () => {

    return (
        <div>
            <div className='head_continar'>
                <h3><Link to={"/"}>Home</Link> / Product</h3>

            </div>
            <div>
                <Container />
            </div>






        </div>
    )
}

export default Product