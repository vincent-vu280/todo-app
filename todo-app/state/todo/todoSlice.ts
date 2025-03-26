import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../store';
import { FormSubmission } from '@/components/ui/AddTodoModal';

export type TodoItem = {
    'name': string,
    'complete': boolean,
    'id': string,
    'category': string,
}

const initialState: TodoItem[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<FormSubmission>) => {
            const payload: TodoItem = {
                'name': action.payload.name,
                'complete': false,
                'id': uuid.v4(),
                'category': action.payload.category,
            }
            
            state.push(payload);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            return state.filter((todo: TodoItem) => todo.id !== action.payload);
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.find((todo: TodoItem) => todo.id === action.payload);
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
            (state, action: PayloadAction<TodoItem[]>) => {
                state = action.payload;
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
        const todos: string | null = await AsyncStorage.getItem('todo-list');

        if(todos){
            return JSON.parse(todos);
        }
        return []
    }
);


export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;