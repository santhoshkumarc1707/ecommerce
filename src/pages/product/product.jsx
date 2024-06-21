import { Link, Outlet } from 'react-router-dom';
import './product.scss';
import Sidebar from '../../component/sidebar/sidebar';
import List from '../../products/list_view/list';
import Grid from '../../products/grid_view/grid';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../../images/icons/spinner';

const Product = () => {
    const listitems = {
        search: "",
        category: "",
        company: "",
        colors: "",
        shipping: false,
        price: null,
        sorting: "price-low-high"
    };

    const [view, setView] = useState('grid');
    const [product, setProduct] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);
    const [filters, setFilters] = useState(listitems);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const getAPIData = useCallback(async () => {
        try {
            const response = await axios.get('https://www.course-api.com/react-store-products');
            setProduct(response.data);
        } catch (error) {
            console.log(error.message, "error");
        }
    }, []);

    useEffect(() => {
        getAPIData();
    }, [getAPIData]);

    const handleChange = (e) => {
        const { value } = e.target;
        handleFilterChange("sorting", value);
    };

    const handleFilterChange = (name, value) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const { search, category, company, colors, shipping, price, sorting } = filters;
        let filteredData = product;

        if (search) {
            filteredData = filteredData.filter(curr => curr.name.toLowerCase().includes(search.toLowerCase()));
        }
        if (category && category !== "All") {
            filteredData = filteredData.filter(curr => curr.category.toLowerCase().includes(category.toLowerCase()));
        }
        if (company && company !== "all") {
            filteredData = filteredData.filter(curr => curr.company.toLowerCase().includes(company.toLowerCase()));
        }
        if (colors && colors !== "all") {
            filteredData = filteredData.filter(curr => curr.colors.includes(colors));
        }
        if (shipping) {
            filteredData = filteredData.filter(curr => curr.shipping);
        }
        if (price !== null) {
            filteredData = filteredData.filter(curr => curr.price <= Number(price));
        }

        filteredData.sort((a, b) => {
            if (sorting === 'price-high-low') {
                return a.price - b.price;
            }
            if (sorting === 'price-low-high') {
                return b.price - a.price;
            }
            if (sorting === 'name-a-z') {
                return b.name.localeCompare(a.name);
            }
            if (sorting === 'name-z-a') {
                return a.name.localeCompare(b.name);
            }
            return 0;
        });

        setFilteredProduct(filteredData);
    }, [product, filters]);

    const GridIcon = () => (
        <svg style={{ border: "1px solid black", margin: "2px" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
        </svg>
    );

    const ListIcon = () => (
        <svg style={{ border: "1px solid black", margin: "2px" }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path>
        </svg>
    );



    return (
        <div>
            {isLoading ? <Spinner /> : (
                <>
                    <div className='head_continar'>
                        <h3><Link to="/">Home</Link> / Product</h3>
                    </div>
                    <div className='product_container'>
                        <div className='sidebar_container'>
                            <Sidebar handleFilterChange={handleFilterChange} search={filters.search} product={product} setFilters={setFilters} listitems={listitems} />
                        </div>
                        <Outlet />
                        <div className='gridview_container'>
                            <div className="showtype_btn">
                                <div className="span">

                                    <span onClick={() => setView("grid")} className={view === "grid" ? "fill" : ""} >
                                        <GridIcon />
                                    </span>
                                    <span onClick={() => setView("list")} className={view === "list" ? "fill" : ""}>
                                        <ListIcon />
                                    </span>
                                </div>
                                <p className='filter_count' >{filteredProduct.length} Products Found</p>
                                <hr className='hr_tag' />
                                <h3>Sort By</h3>
                                <select name="sorting" onChange={handleChange} className='price_sort' value={filters.sorting}>
                                    <option value="price-low-high">Price(High to Low)</option>
                                    <option value="price-high-low">Price (Low to High)</option>
                                    <option value="name-a-z">Name (A-Z)</option>
                                    <option value="name-z-a">Name (Z-A)</option>
                                </select>
                            </div>
                            {view === "grid" ? <Grid product={filteredProduct} /> : <List product={filteredProduct} />}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
