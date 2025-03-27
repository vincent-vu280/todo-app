import { Modal, TextInput, Button } from "react-native-paper";
import { Text, View, StyleSheet } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { hideAddModal } from "@/utils/state/modal/addModelSlice";
import { useState } from "react";
import { addTodo, updateStorageAsync } from "@/utils/state/todo/todoSlice";
import { Dropdown } from 'react-native-element-dropdown';
import { RootState, AppDispatch } from "@/utils/state/store";

export type FormSubmission = {
    'name': string,
    'category': string
}

export function AddTodoModal() {
    
    const visible = useSelector((state: RootState) => state.addModal.visible);
    const dispatch: AppDispatch = useDispatch();

    type Category = {
        'category': string,
        'label': string,
    }

    const categories: Category[] = [
        {
            'category': "",
            'label': "None"
        },
        {
            'category': "Work",
            'label': "Work"
        },
        {
            'category': "Personal",
            'label': "Personal"
        },
        {
            'category': "Shopping",
            'label': "Shopping"
        },
        
    ]

    // Text input text state
    const [text, setText] = useState('');

    // Dropdown category value state
    const [category, setCategory] = useState('');

    // Function executed when text in the text input changes
    const onInputTextChangeHandler = (newText: string) => {
        setText(newText);
    }

    // Function executed when text in the text input changes
    const onCategoryChangeHandler = (item: Category) => {
        setCategory(item.category);
    }

    // Function executed when cancel button is pressed
    const onCancelButtonPress = () => {
        dispatch(hideAddModal());

        setText('');
        setCategory('');
    }

    // Function executed when add button is pressed
    const onAddButtonPress = () => {
        dispatch(addTodo(
            {
                'name': text,
                'category': category
            }
        ));
        dispatch(updateStorageAsync());
        dispatch(hideAddModal());
        
        setText('');
        setCategory('');
    }

    return(
        <Modal 
            visible={visible}
            contentContainerStyle={styles.modal}
        >
            <Text>
                To-do: 
            </Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter To-do"
                value={text}
                onChangeText={onInputTextChangeHandler}
            />
            <Text>
                Category: 
            </Text>
            <Dropdown
                style={styles.dropdown}
                data={categories}
                labelField='label'
                valueField='category'
                onChange={onCategoryChangeHandler}
                value={category}
            />
            <View style={styles.buttonWrapper}>
                <Button
                    mode="contained"
                    onPress={onCancelButtonPress}
                >
                    Cancel
                </Button>
                <Button
                    mode="contained"
                    disabled={text.trim().length === 0}
                    onPress={onAddButtonPress}
                >
                    Add
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
    dropdown: {
        marginBottom: '10%', 
        padding: 10, 
        backgroundColor: 'rgba(76, 43, 160, 0.13)'
    },
    buttonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        gap: '25%',
    },
    textInput: {
        marginBottom: '10%',
    }
});
