import LayoutDefault from './layouts/LayoutDefault';
import TodoWrapper from './components/todos/TodoWrapper';
import SidebarWrapper from './components/sidebar/SidebarWrapper';

import type { RootState } from './redux/store';
import { useSelector } from 'react-redux';

function App() {
    const theme = useSelector((state: RootState) => state.theme.theme);

    return (
        <div data-bs-theme={theme}>
            <LayoutDefault>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 col-lg-3">
                            <SidebarWrapper />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <TodoWrapper />
                        </div>
                    </div>
                </div>
            </LayoutDefault>
        </div>
    );
}

export default App;
