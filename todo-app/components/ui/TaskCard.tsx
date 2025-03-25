import { Card, Checkbox } from 'react-native-paper';
import { IconButton } from 'react-native-paper';
import { useState } from 'react';

export function TaskCard({ name, complete }) {

    const [checked, setChecked] = useState(complete);

    return(
        <Card style={{ marginBottom: 20 }}> 
            <Card.Title
                title={name} 
                left={() => {
                    return(
                        <Checkbox 
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setChecked(!checked);
                            }}
                        />
                    );
                }}  
                right={() => {
                    return(
                        <IconButton 
                            icon='trash-can'
                            onPress={() => {
                                console.log(`Delete Button pressed for ${name}`)
                            }}
                        />
                    );
                }}         
            />
        </Card>
    );
}