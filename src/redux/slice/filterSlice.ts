import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FilterSlice {
    title?: string;
    group?: string;
}
const initialState: FilterSlice = {
    title: '',
    group: '',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterTitle(state, action: PayloadAction<string>) {
            state.title = action.payload;
        },
        setFilterGroup(state, action: PayloadAction<string>) {
            state.group = action.payload;
        },
    },
});

export const { setFilterTitle, setFilterGroup } = filterSlice.actions;
export default filterSlice.reducer;
