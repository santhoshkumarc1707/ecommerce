import { useState, useEffect } from 'react';
import './company.scss'

// eslint-disable-next-line react/prop-types
const Company = ({ handleFilterChange = () => { }, product = [] }) => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        const companyList = product.map((curr) => curr.company);
        const sortedCompanyList = [...new Set(companyList)];
        setCompanies(["all", ...sortedCompanyList]);
    }, [product]);

    const handleChange = (e) => {
        const { value } = e.target;
        handleFilterChange("company", value);
    };

    return (
        <div className='company_container'>
            <label className='label_content'>Company</label>
            <div>
                <select name="company_list" onChange={handleChange} className='select_component'>
                    {companies?.map((curr, idx) => (
                        <option key={idx} value={curr}>{curr}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Company;
