import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light';
export interface ThemeState {
    theme: Theme;
}

const initialState: ThemeState = {
    theme: (localStorage.getItem('theme') as Theme) || 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTheme(state, action: PayloadAction<Theme>) {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
        },
    },
});

/**
 * action creators
 */

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
