import './container.scss'
// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return (
        <div className="container_wrapper " >
            {children}
        </div>
    )
}

export default Container