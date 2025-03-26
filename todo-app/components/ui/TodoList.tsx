import { FlatList, Text, View, StyleSheet } from "react-native";
import { TodoCard } from "./TodoCard";
import { useSelector } from 'react-redux';
import { RootState } from "@/state/store";
import { TodoItem } from "@/state/todo/todoSlice";

export function TodoList() {
    
    const todos = useSelector((state: RootState) => state.todos);

    // Function to render todo cards for the todo list
    const renderTodoCard = ({item}: {item: TodoItem}) => {
        return(
            <TodoCard 
                name={item.name} 
                complete={item.complete}
                id={item.id}
                category={item.category}
            />
        );
    }

    // Function to render the empty list component when the list is empty
    const renderListEmpty = () => {
        return(
            <View 
                style={styles.emptyContainer}
            >
                <Text 
                    style={styles.emptyText}
                > 
                    No To-Do Items Currently
                </Text>
            </View>
        )
    }

    // Function to render the overhang so that the FAB doesn't block a todo item
    const renderListOverhang = () => {
        return(
            <View 
                style={styles.listOverhang} 
            />
        );
    }

    return(
        <FlatList 
            style={styles.todoList}
            data={todos}
            renderItem={renderTodoCard}
            ListFooterComponent={renderListOverhang}
            keyExtractor={item => item.id}
            ListEmptyComponent={renderListEmpty}
        />
    );
}

const styles = StyleSheet.create({
    todoList: {
        display: 'flex', 
        width: "100%", 
        marginTop: "10%",
    },
    emptyContainer: {
        alignItems: 'center',
        marginTop: '50%',
    },
    emptyText: {
        fontSize: 16,
        color: 'lightgray',
    },
    listOverhang: {
        paddingVertical: '10%'
    }
});