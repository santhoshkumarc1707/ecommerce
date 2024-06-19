import { useEffect, useState } from "react";
import './category.scss'


// eslint-disable-next-line react/prop-types
const Category = ({ handleFilterChange = () => { }, product = [] }) => {

    const [active, setActive] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const categorylist = product?.map((curr) => {
            return curr.category
        });
        const filtredArray = [...new Set(categorylist)]
        setCategories(['All', ...filtredArray]);
    }, [product]);

    const handleClick = (e) => {
        const { id } = e.target
        handleFilterChange("category", id)
        setActive(id);
    }
    return (
        <div className="category_filters">
            <label className="label_content" >Category</label>
            <div className="category_option">
                {
                    categories?.map((curr, idx) =>
                        <span
                            onClick={handleClick}
                            style={{ cursor: "pointer" }}
                            className={`menus ${active === curr ? "active" : ""}`}
                            id={curr} key={idx}>{curr}
                        </span>)
                }
            </div>

        </div>
    )
}

export default Category