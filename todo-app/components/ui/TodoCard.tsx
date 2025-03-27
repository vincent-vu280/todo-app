import { Card, Checkbox, IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { showDeleteModal } from '@/utils/state/modal/deleteModalSlice';
import { deleteTodo, toggleTodo, updateStorageAsync, TodoItem } from '@/utils/state/todo/todoSlice';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated from 'react-native-reanimated';
import { View, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppDispatch } from '@/utils/state/store';

export function TodoCard({name, id, category, complete}: {name: string, id: string, category: string, complete: boolean}) {
    
    const dispatch: AppDispatch = useDispatch();

    // Function to handle animating the View when the user swipes
    const SwipeAction= () => {
        return (
            <Reanimated.View>
                <View style={{paddingHorizontal: 200}}></View>
            </Reanimated.View>
        );
    }

    // Function that runs when the user swipes on the todo card
    const swipeHandler = () => {
        dispatch(deleteTodo(id));
        dispatch(updateStorageAsync());
    }

    // Function that runs when checkbox is toggled
    const checkboxToggleHandler = () => {
        dispatch(toggleTodo(id));
        dispatch(updateStorageAsync());
    }

    // Function that runs when delete button is pressed
    const deleteButtonHandler = () => {
        dispatch(showDeleteModal({id: id, name: name}));
    }

    // Renders the component on the left side of the todo card
    const renderLeftCardComponent = () => {
        return(
            <Checkbox 
                status={complete ? 'checked' : 'unchecked'}
                onPress={checkboxToggleHandler}
            />
        );
    }

    // Renders the component on the right side of the todo card
    const renderRightCardComponent = () => {
        return(
            <IconButton 
                icon='trash-can'
                onPress={deleteButtonHandler}
            />
        );
    }

    return(
        <GestureHandlerRootView>
            <ReanimatedSwipeable
                friction={5}
                rightThreshold={50}
                renderRightActions={SwipeAction}
                leftThreshold={50}
                renderLeftActions={SwipeAction}
                onSwipeableOpen={swipeHandler}
            >
                <Card 
                    style={styles.todoCard}
                > 
                    <Card.Title
                        title={name}
                        titleStyle={{ textDecorationLine: complete ? 'line-through' : 'none' }} 
                        subtitle={category}
                        subtitleStyle={styles.subtitleText}
                        titleNumberOfLines={5}
                        left={renderLeftCardComponent}  
                        right={renderRightCardComponent}         
                    />
                </Card>
            </ReanimatedSwipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    todoCard: { 
        marginBottom: 20, 
        marginHorizontal: '10%' 
    },
    subtitleText: {
        color: "rgb(119, 14, 238)"
    },
})
