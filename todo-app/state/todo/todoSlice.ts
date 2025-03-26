import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const payload = {
                'name': action.payload,
                'complete': false,
                'id': uuid.v4(),
            }
            state.push(payload);
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.complete = !todo.complete;
            }
        },
    },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;