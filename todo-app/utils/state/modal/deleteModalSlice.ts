import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeleteInfo } from '@/components/ui/DeleteTodoModal'

interface DeleteModalState {
    visible: boolean,
    key: string,
    name: string,
}

const initialState: DeleteModalState = {
    visible: false,
    key: '',
    name: '',
}

const deleteModalSlice = createSlice({
    name: 'deleteModal',
    initialState,
    reducers: {
        showDeleteModal: (state, action: PayloadAction<DeleteInfo>) => {
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