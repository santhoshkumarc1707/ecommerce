import { useEffect, useState } from 'react';
import { Correct } from '../../images/icons/correct'
import './color.scss'

// eslint-disable-next-line react/prop-types
const Color = ({ handleFilterChange = () => { }, product = [] }) => {
    const [colories, setColories] = useState([]);
    const [active, setActive] = useState('all');

    useEffect(() => {
        const colorList = product?.flatMap((curr) => curr.colors) || [];
        const sortedColorList = [...new Set(colorList)];
        setColories(['all', ...sortedColorList]);
    }, [product]);

    const handleClick = (e) => {
        const { value } = e.target;
        setActive(value);
        handleFilterChange("colors", value);
    }

    return (
        <div className='color_container'>
            <p>Colors</p>
            <div className='color_component'>
                {
                    colories?.map((curr, idx) =>
                        <button
                            key={idx}
                            className={`color_btn ${active === curr ? "active" : ""}`}
                            style={{ background: curr }}
                            value={curr}
                            onClick={handleClick}
                        >
                            {curr === "all" ? "All" : null}
                            {active === curr && <Correct />}
                        </button>
                    )
                }
            </div>
        </div>
    );
}

export default Color;
