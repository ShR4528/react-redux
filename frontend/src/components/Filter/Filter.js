import { useDispatch, useSelector } from 'react-redux';

import { setTitleFilter, selectTitleFilter, resetFilter, setAuthorFilter, selectAuthorFilter, selectOnlyFavorite, setOnlyFavorite } from '../../redux/slices/filterSlice';
import "./Filter.css";

const Filter = () => {
    const dispatch = useDispatch();
    const titleFilter = useSelector(selectTitleFilter);
    const authorFilter = useSelector(selectAuthorFilter);
    const onlyFavorite = useSelector(selectOnlyFavorite);

    const handleChange = (e) => {
        dispatch(setTitleFilter(e.target.value));
    };

    const handleChangeAuthor = (e) => {
        dispatch(setAuthorFilter(e.target.value));

    };

    const handleOnlyFavoriteFilter = () => {
        dispatch(setOnlyFavorite());
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
                <div className='filter-group'>
                    <input
                        onChange={handleChangeAuthor}
                        value={authorFilter}
                        type='text'
                        placeholder='Filter by author...' />
                </div>
                <div className='filter-group'>
                    <label>
                        <input
                            onChange={handleOnlyFavoriteFilter}
                            checked={onlyFavorite}
                            type='checkbox'
                        />
                        Favorite
                    </label>

                </div>
                <button type='buttom' onClick={handleClear}>
                    Clear
                </button>
            </div>
        </div>
    );
};

export default Filter;
