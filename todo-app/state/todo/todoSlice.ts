import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../store';

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
    
    extraReducers: (builder) => {
        builder.addCase(
            updateStorageAsync.fulfilled,
            () => {
                console.log("update storage success");
            }
        ).addCase(
            initializeStateAsync.fulfilled,
            (state, action) => {
                if(action.payload){
                    state = action.payload;
                }
            }
        )
    }
        
});


export const updateStorageAsync = createAsyncThunk(
    "todo/updateStorageAsync",
    async () => {
        const todos = store.getState().todos;
        try {
            await AsyncStorage.setItem("todo-list", JSON.stringify(todos));
        }
        catch(e) {
            console.log(e)
        }
    }
);

export const initializeStateAsync = createAsyncThunk(
    "todo/initializeStateAsync",
    async () => {
        return JSON.parse(await AsyncStorage.getItem('todo-list'));
    }
);


export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;