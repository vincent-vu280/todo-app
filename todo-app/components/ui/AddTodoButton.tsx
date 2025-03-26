import { showAddModal } from "@/state/modal/addModelSlice";
import { FAB } from "react-native-paper";
import { useDispatch } from "react-redux";

export function AddTodoButton(){

    const dispatch = useDispatch();

    return(
        <FAB
            style={{
                position: 'absolute',
                margin: 16,
                bottom: 0,
            }}
            onPress={ () => {
                dispatch(showAddModal())
            }}
            label="Add To-Do"
            icon="plus"
        />
    );
}