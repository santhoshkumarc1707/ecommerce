import Input from "../input/input"
import './search.scss'

// eslint-disable-next-line react/prop-types
const Searchbar = ({ handleFilterChange = () => { }, search }) => {

    return (
        <div>
            <Input
                type="search"
                name='search'
                className="search_bar"
                placeholder='Search'
                value={search}
                onChange={(e) => handleFilterChange('search', e.target.value)} />
        </div>
    )
}

export default Searchbar