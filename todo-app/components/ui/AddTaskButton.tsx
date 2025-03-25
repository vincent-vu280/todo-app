import { Button } from "react-native";

export function AddTaskButton(){
    return(
        <Button
            onPress={ () => {
                console.log("Add Button Clicked")
            }}
            title="Add Task"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    );
}