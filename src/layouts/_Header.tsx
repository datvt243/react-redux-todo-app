import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { changeTheme } from '../redux/slice/themeSlice';

export default function Header() {
    const theme = useSelector((state: RootState) => state.theme.theme);
    const dispatch = useDispatch();
    return (
        <header className="header-wrapper border-bottom">
            <nav className="navbar py-3">
                <div className="container">
                    <p className="navbar-brand m-0">
                        <strong className="h5 mb-0">[REACT-REDUX-APP] Todo List</strong>
                    </p>
                    <div className="theme-mode">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button
                                type="button"
                                className={['btn btn btn-outline-secondary', theme === 'light' && 'active'].join(' ')}
                                onClick={() => {
                                    dispatch(changeTheme('light'));
                                }}
                            >
                                <FontAwesomeIcon icon={faSun} /> Light
                            </button>
                            <button
                                type="button"
                                className={['btn btn btn-outline-secondary', theme === 'dark' && 'active'].join(' ')}
                                onClick={() => {
                                    dispatch(changeTheme('dark'));
                                }}
                            >
                                <FontAwesomeIcon icon={faMoon} /> Dark
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
