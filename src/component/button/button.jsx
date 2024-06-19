import './button.scss'
// eslint-disable-next-line react/prop-types
const Button = ({ children, className, ...otherProps }) => {
    return (

        <button {...otherProps} className={className}>{children}</button>
    )
}

export default Button