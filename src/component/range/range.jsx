import { useCallback, useEffect, useState } from "react"
import Input from "../input/input"
import './range.scss'

// eslint-disable-next-line react/prop-types
const Range = ({ product = [], handleFilterChange = () => { } }) => {

    const getLargestPrice = useCallback(async (arr) => {
        const priceArray = arr?.map((curr) => curr.price)
        let largest = 0;
        for (let i = 0; i < priceArray.length; i++) {
            if (priceArray[i] > largest) {
                largest = priceArray[i];
            }
        }
        return largest
    }, []);

    const [largest, setLargest] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchLargestPrice = async () => {
            const largestPrice = await getLargestPrice(product);
            setLargest(largestPrice);
            setValue(largestPrice)
        };

        fetchLargestPrice();
    }, [getLargestPrice, product])

    const handleChange = (e) => {
        setValue(Number(e.target.value));
        handleFilterChange("price", value)
    };
    const formatPrice = (price) => {
        const priceStr = price.toFixed(2).replace('.', '');
        const length = priceStr.length;
        const formattedPrice = `$${priceStr.substring(0, length - 6)},${priceStr.substring(length - 5, length - 3)}.${priceStr.substring(length - 4, length - 2)}`;
        return formattedPrice;
    };
    return (
        <div className="range_continar">
            <h3 className="label_content">price</h3>
            <p>{formatPrice(value)}</p>
            <Input
                type="range"
                value={value}
                min="0"
                max={largest}
                name='price'
                onChange={handleChange}
            />
        </div>
    );
};

export default Range;
