import Custom from '../../component/custom/custom'
import Design from '../../component/design/design'
import Email from '../../component/email/email'
import Feature from '../../component/feature/feature'
import './home.scss'
const Home = () => {
    return (
        <div>
            <Design />
            <Feature />
            <Custom />
            <Email />
        </div >
    )
}

export default Home