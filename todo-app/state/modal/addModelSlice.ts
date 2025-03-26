import { createSlice } from '@reduxjs/toolkit'

const addModalSlice = createSlice({
    name: 'addModal',
    initialState: {
        visible: false
    },
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