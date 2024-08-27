import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { iTodoItem } from '../../types/types';
import { v4 as uuidv4 } from 'uuid';

export interface TodoSlice {
    item: iTodoItem;
    edit: iTodoItem;
    list: iTodoItem[];
}

const todoItem: iTodoItem = {
    id: '',
    title: '',
    description: '',
    isDone: false,
    /* isImportant: false, */
    group: '',
    repeat: '',
    deadline: +new Date(),
    created_at: +new Date(),
};
const initialState: TodoSlice = {
    item: {
        ...todoItem,
    },
    edit: { ...todoItem },
    list: (() => {
        const getLocal: string | null = localStorage.getItem('list');
        if (getLocal) {
            return JSON.parse(getLocal);
        }

        return [];
    })(),
};
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        resetTodoItem(state) {
            state.item = { ...todoItem };
        },
        resetEditItem(state) {
            state.edit = { ...todoItem };
        },
        setEditItem(state, action: PayloadAction<iTodoItem>) {
            state.edit = {
                ...action.payload,
            };
        },
        addTodo(state, action: PayloadAction<string>) {
            const newItem = {
                ...todoItem,
                id: uuidv4(),
                title: action.payload,
            };
            state.list.push(newItem);

            localStorage.setItem('list', JSON.stringify(state.list));

            /* const newItem: iTodoItem = {
                id: uuidv4(),
                group: filter || '',
                title: string,
                description: '',
                repeat: filter === 'planned' ? 'daily' : '',
                isDone: false,
                created_at: +new Date(),
                deadline: +new Date(),
            };
    
           
            newItem.repeat &&
                ((repeat) => {
                    newItem.group = 'planned';
    
                    const _date = new Date();
    
                    switch (repeat) {
                        case 'daily':
                            _date.setDate(_date.getDate() + 1);
                            _date.setHours(23, 59, 59, 999);
                            newItem.deadline = +_date;
                            break;
    
                        default:
                            break;
                    }
                })(newItem.repeat); */
        },
        removeTodo(state, action: PayloadAction<string>) {
            state.list = state.list.filter((item) => item.id !== action.payload);
        },
        moveToTrash(state, action: PayloadAction<string>) {
            const index = state.list.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.list[index].deleted_at = +new Date();
                state.list[index].group = 'delete';
            }
        },

        updateTodo(state, action: PayloadAction<iTodoItem>) {
            const index = state.list.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.list[index] = action.payload;
                localStorage.setItem('list', JSON.stringify(state.list));
            }
        },
        markAsRead(state, action: PayloadAction<string>) {
            const index = state.list.findIndex((item) => item.id === action.payload);
            if (index !== -1) {
                state.list[index].isDone = !state.list[index].isDone;
            }
        },
        markAsImportant(state, action: PayloadAction<string>) {
            const index = state.list.findIndex((item) => item.id === action.payload);

            if (index === -1) return;
            const gr = state.list[index].group;
            if (gr === 'important') {
                state.list[index].group = '';
            } else {
                state.list[index].group = 'important';
            }
        },
    },
});

// creators
export const {
    addTodo,
    resetTodoItem,
    resetEditItem,
    markAsImportant,
    markAsRead,
    removeTodo,
    moveToTrash,
    updateTodo,
    setEditItem,
} = todoSlice.actions;
export default todoSlice.reducer;
