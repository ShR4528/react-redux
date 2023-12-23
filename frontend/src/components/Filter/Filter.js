import { useDispatch, useSelector } from 'react-redux';

import { setTitleFilter, selectTitleFilter, resetFilter } from '../../redux/slices/filterSlice';
import "./Filter.css";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const handleChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleClear = () => {
        dispatch(resetFilter());
    };

    return (
        <div className="app-block filter">
            <div className='filter-row'>
                <div className='filter-group'>
                    <input
                        onChange={handleChange}
                        value={titleFilter}
                        type='text'
                        placeholder='Filter by title...' />
                </div>
                <button type='buttom' onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Filter;
