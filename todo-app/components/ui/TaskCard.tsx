import { Card, Checkbox } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { showDeleteModal } from '@/state/modal/deleteModalSlice';
import { deleteTodo, toggleTodo, updateStorageAsync } from '@/state/todo/todoSlice';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import Reanimated from 'react-native-reanimated';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export function TaskCard({ name, complete, id }) {
    
    const dispatch = useDispatch();

    function SwipeAction() {
        
        return (
            <Reanimated.View>
                <View style={{paddingHorizontal: 200}}></View>
            </Reanimated.View>
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
                onSwipeableOpen={() => {
                    dispatch(deleteTodo(id));
                }}
            >
                <Card style={{ marginBottom: 20, }}> 
                    <Card.Title
                        title={name} 
                        titleNumberOfLines={5}
                        left={() => {
                            return(
                                <Checkbox 
                                    status={complete ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        dispatch(toggleTodo(id));
                                        dispatch(updateStorageAsync());
                                    }}
                                />
                            );
                        }}  
                        right={() => {
                            return(
                                <IconButton 
                                    icon='trash-can'
                                    onPress={() => {
                                        dispatch(showDeleteModal({id: id, name: name}));
                                        console.log(`Delete Button pressed for ${name}`);
                                    }}
                                />
                            );
                        }}         
                    />
                </Card>
            </ReanimatedSwipeable>
        </GestureHandlerRootView>
    );
}

