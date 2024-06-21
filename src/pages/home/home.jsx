import { useEffect, useState } from 'react'
import Custom from '../../component/custom/custom'
import Design from '../../component/design/design'
import Email from '../../component/email/email'
import Feature from '../../component/feature/feature'
import { Spinner } from '../../images/icons/spinner'
const Home = () => {
    const [isloading, setIsloading] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsloading(false)
        }, 2000)
        return () => clearTimeout(timer);
    })
    return (
        <div>
            {isloading ? <><Spinner /></> : <>

                <Design />
                <Feature />
                <Custom />
                <Email />
            </>}
        </div >
    )
}

export default Home