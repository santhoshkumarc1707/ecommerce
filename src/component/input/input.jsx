

// eslint-disable-next-line react/prop-types
const Input = ({ label, name, value, type, onChange, className }) => {
    return (
        <div>
            {label && <label htmlFor="">{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                className={className}



            />


        </div>
    )
}

export default Input