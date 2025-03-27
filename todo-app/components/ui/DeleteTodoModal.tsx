import { Modal, Text, Button } from "react-native-paper";
import { View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from 'react-redux';
import { hideDeleteModal } from "@/utils/state/modal/deleteModalSlice";
import { deleteTodo, updateStorageAsync } from "@/utils/state/todo/todoSlice";
import { RootState, AppDispatch } from "@/utils/state/store";

export type DeleteInfo = {
    'id': string,
    'name': string
}

export function DeleteTodoModal({}) {
    
    const visible = useSelector((state: RootState) => state.deleteModal.visible);
    const id = useSelector((state: RootState) => state.deleteModal.key);
    const name = useSelector((state: RootState) => state.deleteModal.name);
    const dispatch: AppDispatch = useDispatch();

    // Function executed when cancel button is pressed
    const onCancelButtonPress = () => {
        dispatch(hideDeleteModal());
    }

    // Function executed when delete button is pressed
    const onDeleteButtonPress = () => {
        dispatch(hideDeleteModal());
        dispatch(deleteTodo(id));
        dispatch(updateStorageAsync());
    }

    return(
        <Modal 
            contentContainerStyle={styles.modal}
            visible={visible}
        >
            <Text style={styles.modalText}>
                Are you sure you want to delete "{name}"?
            </Text>
            <View 
                style={styles.buttonWrapper}
            >
                <Button
                    mode="outlined"
                    onPress={onCancelButtonPress}
                >
                    Cancel
                </Button>
                <Button
                    buttonColor="rgb(199, 0, 0)"
                    mode="contained"
                    onPress={onDeleteButtonPress}
                >
                    Delete
                </Button>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modal: {
        padding: '5%', 
        margin: '10%', 
        backgroundColor: 'white', 
        borderRadius: 10, 
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        gap: '25%',
        marginTop: '10%',
    },
    modalText: {
        textAlign: 'center',
        fontSize: 18,
    },
});