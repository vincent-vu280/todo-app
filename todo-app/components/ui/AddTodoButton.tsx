import { showAddModal } from "@/state/modal/addModelSlice";
import { FAB } from "react-native-paper";
import { useDispatch } from "react-redux";
import { StyleSheet } from "react-native";

export function AddTodoButton(){

    const dispatch = useDispatch();
    
    // Function executed when FAB is pressed
    const addFABHandler = () => {
        dispatch(showAddModal());
    }

    return(
        <FAB
            style={styles.fab}
            onPress={addFABHandler}
            label="Add To-Do"
            icon="plus"
        />
    );
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        bottom: 0,
    }
});