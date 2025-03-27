import { StyleSheet, View } from 'react-native';
import { AddTodoButton } from '@/components/ui/AddTodoButton';
import { TodoList } from '@/components/ui/TodoList';
import { DeleteTodoModal } from '@/components/ui/DeleteTodoModal';
import { AddTodoModal } from '@/components/ui/AddTodoModal';
import { initializeStateAsync } from '@/utils/state/todo/todoSlice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/utils/state/store';

export default function HomeScreen() {
  
  const dispatch: AppDispatch = useDispatch();
  dispatch(initializeStateAsync());

  return (
      <View style={styles.appContainer}>
        <TodoList/>
        <DeleteTodoModal/>
        <AddTodoModal/>
        <AddTodoButton/>
      </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'white',
  }
});
