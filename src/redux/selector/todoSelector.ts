import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { iTodoItem } from '../../types/types';

const getTodoList = (state: RootState) => state.todo.list;
const getFilterTitle = (state: RootState) => state.filter.title;
const getFilterGroup = (state: RootState) => state.filter.group;

export const todoSelector = createSelector(getTodoList, getFilterTitle, getFilterGroup, (list, title, group) => {
    // filter group
    let result: iTodoItem[] = [...list];

    // filter by group
    result = (() => {
        if (group === 'success') {
            return result.filter((e) => e.isDone || false);
        }

        return group ? result.filter((e) => e.group === group) : result.filter((e) => e.group !== 'delete');
    })();

    // filter by title
    if (title) {
        result = result.filter((e) => e.title.includes(title));
    }

    return result;
});
