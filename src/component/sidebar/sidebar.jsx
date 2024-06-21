
import Category from '../category/category';
import Company from '../company/company';
import Searchbar from '../searchbar/searchbar';
import Color from '../color/color'
import './sidebar.scss'
import Range from '../range/range';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ handleFilterChange = () => { }, search, product, setFilters, listitems }) => {
    const handleChange = (e) => {
        handleFilterChange("shipping", e.target.checked)
    }
    const handleRestart = () => {
        setFilters(listitems);
        
    };
    return (
        <div>
            <div className='sidebar_container' >
                <Searchbar handleFilterChange={handleFilterChange} search={search} />
                <Category handleFilterChange={handleFilterChange} product={product} />
                <Company handleFilterChange={handleFilterChange} product={product} />
                <Color handleFilterChange={handleFilterChange} product={product} />
                <Range handleFilterChange={handleFilterChange} product={product} />
                <div className='shipping_container'>
                    <p className='ship_content'>Free Shipping</p >
                    <input type="checkbox" onChange={handleChange} className='check_box' />
                </div>
                <button onClick={handleRestart} className='flt_btn'>Clear Filters</button>
            </div>
        </div >
    )
}

export default Sidebar

