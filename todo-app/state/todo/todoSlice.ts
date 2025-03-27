import { createSlice, createAsyncThunk, PayloadAction  } from '@reduxjs/toolkit'
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { store } from '../store';
import { FormSubmission } from '@/components/ui/AddTodoModal';
import { getTodoList, updateDateUpdated, updateTodoList, getDateUpdated } from '@/utils/db/dbUtils';


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
                action.payload.forEach((todo) => {
                    state.push(todo);
                })
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
            await AsyncStorage.setItem("date-updated", new Date().toDateString());
            await updateDateUpdated();
            await updateTodoList(todos);
        }
        catch(e) {
            console.log(e)
        }
    }
);

export const initializeStateAsync = createAsyncThunk(
    "todo/initializeStateAsync",
    async () => {

        const storageDateUpdated: string = await AsyncStorage.getItem('date-updated') ?? '0';
        
        const localDate = new Date(storageDateUpdated);
        
        const fsDateUpdated: Date = await getDateUpdated() ?? new Date('0');
        
        // Synchronize local and cloud storage prioritizing the most recently updated

        if(localDate < fsDateUpdated) {
            const todos: TodoItem[] | null = await getTodoList();
            if(todos){
                await AsyncStorage.setItem("todo-list", JSON.stringify(todos));
                await AsyncStorage.setItem("date-updated", new Date().toDateString());
                return todos;
            }
            return [];
        }
        else{
            const todos: string | null = await AsyncStorage.getItem('todo-list');
            
            if(todos){
                await updateDateUpdated();
                await updateTodoList(JSON.parse(todos));
                return JSON.parse(todos);
            }
            return [];
        }

        

        
    }
);


export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;