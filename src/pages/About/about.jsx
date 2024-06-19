import { Link } from 'react-router-dom'
import './about.scss'
const About = () => {
    return (
        <div >
            <div className='head_continar'>
                <h3><Link to="/">Home</Link> / About</h3>
            </div>
            <div className='about_continar'>
                <div className='pic_content'>
                    <img src="src/assets/aboutpic.jpeg" alt="pic" width={553} height={500} />
                </div>
                <div className='detail_content'>
                    <div >
                        <h2><span className='underline'>Our S</span>tory</h2>
                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                </div>
            </div>
        </div>
    )
}
export default About