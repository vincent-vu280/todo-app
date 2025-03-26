import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { AddTodoButton } from '@/components/ui/AddTodoButton';
import { TaskList } from '@/components/ui/TaskList';
import { useSelector } from 'react-redux';
import { DeleteTodoModal } from '@/components/ui/DeleteTodoModal';
import { AddTodoModal } from '@/components/ui/AddTodoModal';

export default function HomeScreen() {

  const todos = useSelector((state) => state.todos)

  return (
      <ThemedView style={styles.appContainer}>
        <TaskList data={todos}/>
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
