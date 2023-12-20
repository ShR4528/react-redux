import { useDispatch, useSelector } from 'react-redux';

import { setTitleFilter, selectTitleFilter } from '../../redux/slices/filterSlice';
import "./Filter.css";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const handleChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    return (
        <div className="app-block filter">
            <div className='filter-group'>
                <input onChange={handleChange}
                    value={titleFilter}
                    type='text' placeholder='Filter by title...' />
            </div>
        </div>
    );
};

export default Filter;
