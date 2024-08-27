import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import type { RootState } from '../../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterTitle } from '../../redux/slice/filterSlice';

function Search() {
    const search = useSelector((state: RootState) => state.filter.title);
    const dispatch = useDispatch();

    return (
        <div className="input-group input-group-sm m-0">
            <span className="input-group-text p-1">
                <button className="btn btn-primary btn-sm" disabled={!search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </span>
            <input
                value={search}
                onChange={(e) => {
                    dispatch(setFilterTitle(e.target.value));
                }}
                type="text"
                className="form-control form-control-sm"
                placeholder="Search ..."
            />
        </div>
    );
}

export default Search;
