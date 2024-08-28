import { configureStore } from '@reduxjs/toolkit';
import themeReducers from './slice/themeSlice';
import filterReducers from './slice/filterSlice';
import todoReducers from './slice/todoSlice';

// redux-persist
import { combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['filter'],
};

const rootReducers = combineReducers({
    theme: themeReducers,
    filter: filterReducers,
    todo: todoReducers,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
            },
        }),
});

export default store;
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
