import { FlatList } from "react-native";
import { TaskCard } from "./TaskCard";

export function TaskList({data}) {
    return(
        <FlatList 
            style={{ width: "90%", marginTop: "10%" }}
            data={data}
            renderItem={({item}) => {
                    return(
                        <TaskCard 
                            name={item.name} 
                            complete={item.complete}
                        />
                    );
                }
            }
            keyExtractor={(item) => {item.id}}
        />
    );
}