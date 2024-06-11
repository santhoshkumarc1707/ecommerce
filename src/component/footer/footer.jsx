import Container from '../container/container';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer_continar'>
            <Container>
                <p>&copy;  2024 <span>ComfySloth</span>
                    &nbsp; All rights reserved</p>
            </Container>
        </div>
    )
}

export default Footer