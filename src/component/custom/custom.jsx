import { Historycons } from '../../images/icons/icons'
import { Mission } from '../../images/icons/mission'
import { Vision } from '../../images/icons/vision'
import './custom.scss'

const services = [
    { name: "Mission", icon: <Mission /> },
    { name: "Vision", icon: <Vision /> },
    { name: "History", icon: <Historycons /> }
]
const Custom = () => {
    return (
        <div className='custom_continar'>
            <div className="header_section">
                <h3>Custom Furniture  <br /> Built Only For You</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur
                    reprehenderit non aliquam voluptates dolore aut vero <br />consequuntur.</p>
            </div>
            <div className='services_continar'>
                {
                    services.map((curr, id) => (<div key={id} className='services'>
                        <span>
                            {curr.icon}
                        </span>
                        <h6>{curr.name}</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>

                    </div>))
                }


            </div>
        </div>
    )
}

export default Custom