import { Modal } from "react-native-paper";
import { ThemedText } from "../ThemedText";
import { Button, View } from "react-native"
import { useDispatch, useSelector } from 'react-redux';
import { hideDeleteModal } from "@/state/modal/deleteModalSlice";
import { deleteTodo } from "@/state/todo/todoSlice";

export function DeleteTodoModal({}) {
    
    
    const visible = useSelector((state) => state.deleteModal.visible);
    const id = useSelector((state) => state.deleteModal.key);
    const name = useSelector((state) => state.deleteModal.name);
    const dispatch = useDispatch();

    return(
        <Modal 
            contentContainerStyle={{padding: '5%', margin: '10%',backgroundColor: 'black'}}
            visible={visible}

        >
            <ThemedText>Are you sure you want to delete "{name}"?</ThemedText>
            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignSelf: 'center',
                    gap: '40%',
                }}
            >
                <Button
                    title='Cancel'
                    onPress={() => {
                        dispatch(hideDeleteModal());
                    }}
                />
                <Button
                    title='Delete'
                    onPress={() => {
                        dispatch(hideDeleteModal());
                        dispatch(deleteTodo(id));
                    }}
                />
            </View>
        </Modal>
    );
}