import { useNavigate } from "react-router-dom"
import './design.scss'
import HeroImg from '../../assets/hero.jpeg'

const Design = () => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('product');
    }
    return (
        <div>
            <div className='Design_continar' >
                <div className='design_content'>
                    <h1>Design Your <br />Comfort Zone</h1>
                    <br />
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Iusto, at sed omnis corporis doloremque possimus velit!<br /> Repudiandae nisi odit, aperiam odio ducimus, obcaecati <br /> libero et quia tempora excepturi quis alias?
                    </p>
                    <button onClick={handleNavigate}>shop now</button>
                </div >
                <div className='design_pic'>
                    <div className='img_3'></div>
                    <img src={HeroImg} alt="pic" width={250} height={165} className='img_2' />
                    <img src="src/assets/aboutpic.jpeg" alt="ss" width={440} height={550} className='img_1' />
                </div>
            </div>
        </div>
    )
}

export default Design