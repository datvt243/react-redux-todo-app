import { configureStore } from '@reduxjs/toolkit';
import themeReducers from './slice/themeSlice';
import filterReducers from './slice/filterSlice';
import todoReducers from './slice/todoSlice';

const store = configureStore({
    reducer: {
        theme: themeReducers,
        filter: filterReducers,
        todo: todoReducers,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
