import { createSlice } from '@reduxjs/toolkit'

interface AddModalState {
    visible: boolean
}

const initialState: AddModalState = {
    visible: false
}

const addModalSlice = createSlice({
    name: 'addModal',
    initialState,
    reducers: {
        showAddModal: (state) => {
            state.visible = true;
        },
        hideAddModal: (state) => {
            state.visible = false;
        },
    },
});

export const { showAddModal, hideAddModal } = addModalSlice.actions;
export default addModalSlice.reducer;