import { StyleSheet, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AddTaskButton } from '@/components/ui/AddTaskButton';

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
    'completed': true,
  },
]

export default function HomeScreen() {

  return (
      <ThemedView style={styles.appContainer}>
        <ThemedText>Hello, world.</ThemedText>
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
