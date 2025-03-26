import { createSlice } from '@reduxjs/toolkit'

const deleteModalSlice = createSlice({
    name: 'deleteModal',
    initialState: {
        visible: false,
        key: '',
        name: '',
    },
    reducers: {
        showDeleteModal: (state, action) => {
            state.visible = true;
            state.key = action.payload.id;
            state.name = action.payload.name;
        },
        hideDeleteModal: (state) => {
            state.visible = false;
            state.key = '';
            state.name = '';
        },
    },
});

export const { showDeleteModal, hideDeleteModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;