import { StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AddTaskButton } from '@/components/ui/AddTaskButton';
import { TaskList } from '@/components/ui/TaskList';

const data = [
  {
    'id': '0',
    'name': 'task 1',
    'completed': false,
  },
  {
    'id': '1',
    'name': 'task 2',
    'completed': false,
  },
  {
    'id': '2',
    'name': 'task 3',
    'complete': true,
  },
  {
    'id': '3',
    'name': 'task 3',
    'completed': false,
  },
  {
    'id': '4',
    'name': 'task 4',
    'completed': false,
  },
  {
    'id': '5',
    'name': 'task 5',
    'complete': true,
  },
  {
    'id': '6',
    'name': 'task 6',
    'completed': false,
  },
  {
    'id': '7',
    'name': 'task 7',
    'completed': false,
  },
  {
    'id': '8',
    'name': 'task 8',
    'complete': true,
  },
]

export default function HomeScreen() {

  return (
      <ThemedView style={styles.appContainer}>
        <TaskList data={data}/>
        <AddTaskButton/>
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
