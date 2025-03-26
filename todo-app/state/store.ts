import { configureStore, createSlice } from '@reduxjs/toolkit'
import addModalReducer from './modal/addModelSlice'
import deleteModalReducer from './modal/deleteModalSlice'
import todoReducer from './todo/todoSlice'

export const store = configureStore({
    reducer: {
        todos: todoReducer,
        deleteModal: deleteModalReducer,
        addModal: addModalReducer,
    },
});

