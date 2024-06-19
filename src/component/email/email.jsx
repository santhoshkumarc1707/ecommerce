
import Container from '../container/container'
import './email.scss'
const Email = () => {
    return (
        <div>
            <div className='email_continar'>
                <Container>
                    <h3>Join our newsletter and get 20% off</h3>
                    <div className='email'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint<br />
                            unde quaerat ratione soluta veniam provident adipisci cumque eveniet<br /> 
                            tempore?
                        </p>
                        <form >
                            <input type='email'
                                name="email"
                                placeholder='Enter Email'
                                className="input" />
                            <button>Subscribe</button>
                        </form>
                    </div>
                </Container>
            </div>

        </div >
    )
}

export default Email
