import { FlatList } from "react-native";
import { TaskCard } from "./TaskCard";
import { View } from "react-native";

export function TaskList({data}) {
    return(
        <FlatList 
            style={{ width: "100%", paddingHorizontal: '5%', marginTop: "10%" }}
            data={data}
            renderItem={({item}) => {
                    return(
                        <TaskCard 
                            name={item.name} 
                            complete={item.complete}
                            id={item.id}
                        />
                    );
                }
            }
            ListFooterComponent={
                <View style={{paddingVertical: '10%'}} />
            }
            key={(item) => item.id}
        />
    );
}