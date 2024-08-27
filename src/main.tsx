/* import React from 'react'; */
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './bootstrap/bootstrap.scss';
import './bootstrap/bootstrap.js';

import { Provider } from 'react-redux';
import store from './redux/store.ts';

// Sử dụng Vite/Rollup để tải động các .tsx files
//const components = {};
//const importComponent = import.meta.glob(['./components/bases/*.tsx', './components/bases/*/*.tsx']);

/* for (const path in importComponent) {
    const name = path.split('/').pop().replace('.tsx', '');
    components[name] = importComponent[path];
} */
/* components.map(function (v, i) {
  app.component(i, v);
}); */

{
    /* <React.StrictMode> */
}
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <App />
    </Provider>,
);
