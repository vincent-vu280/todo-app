import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { AddTodoButton } from '@/components/ui/AddTodoButton';
import { TaskList } from '@/components/ui/TaskList';
import { DeleteTodoModal } from '@/components/ui/DeleteTodoModal';
import { AddTodoModal } from '@/components/ui/AddTodoModal';
import { initializeStateAsync } from '@/state/todo/todoSlice';
import { useDispatch } from 'react-redux';

export default function HomeScreen() {
    const dispatch = useDispatch();
    
    dispatch(initializeStateAsync());
  return (
      <ThemedView style={styles.appContainer}>
        <TaskList/>
        <DeleteTodoModal/>
        <AddTodoModal/>
        <AddTodoButton/>
      </ThemedView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
});
