import { Card, Checkbox } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { showDeleteModal } from '@/state/modal/deleteModalSlice';
import { toggleTodo } from '@/state/todo/todoSlice';

export function TaskCard({ name, complete, id }) {
    
    const dispatch = useDispatch();

    return(
        <Card style={{ marginBottom: 20 }}> 
            <Card.Title
                title={name} 
                titleNumberOfLines={5}
                left={() => {
                    return(
                        <Checkbox 
                            status={complete ? 'checked' : 'unchecked'}
                            onPress={() => {
                                dispatch(toggleTodo(id));
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
    );
}