import './button.scss'
// eslint-disable-next-line react/prop-types
const Button = ({ children, ...otherProps }) => {
    return (

        <button {...otherProps} className="btn">{children}</button>
    )
}

export default Button