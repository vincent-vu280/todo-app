import { Modal } from "react-native-paper";
import { Button, TextInput, Text, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { hideAddModal } from "@/state/modal/addModelSlice";
import { useState } from "react";
import { addTodo, updateStorageAsync } from "@/state/todo/todoSlice";

export function AddTodoModal() {
    
    const visible = useSelector((state) => state.addModal.visible);
    const dispatch = useDispatch();

    const [text, setText] = useState('');

    return(
        <Modal 
            visible={visible}
            contentContainerStyle={{
                padding: '5%', 
                margin: '10%', 
                backgroundColor: 'white', 
                borderRadius: 10, 
            }}
        >
            <Text>To-do: </Text>
            <TextInput
                placeholder="Enter To-do"
                value={text}
                onChangeText={(newText) => {
                    setText(newText);
                }}
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignSelf: 'center',
                gap: '50%',
            }}>
                <Button
                    title='Cancel'
                    onPress={() => {
                        dispatch(hideAddModal());
                        setText('');
                    }}
                />
                <Button
                    title='Add'
                    disabled={text.trim().length === 0}
                    onPress={() => {
                        dispatch(addTodo(text));
                        dispatch(updateStorageAsync());
                        dispatch(hideAddModal());
                        
                        setText('');
                    }}
                    
                />
            </View>
        </Modal>
    );
}