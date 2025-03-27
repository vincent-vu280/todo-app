import { db } from '@/utils/db/firebase';
import { collection, limit, getDocs, query, updateDoc } from 'firebase/firestore';
import { TodoItem } from '@/utils/state/todo/todoSlice';

type DBEntry = {
    'dateUpdated': Date,
    'todoList': TodoItem[]
}

const getTodoList = async () => {
    const collectionRef = collection(db, "todo-list");
    
    // Create a query with a limit of 1
    const q = query(collectionRef, limit(1));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        // The first document is in the querySnapshot
        const todos: TodoItem[] =  querySnapshot.docs[0].data().todoList;

        return todos;
    }
    return null;
}

const getDateUpdated = async () => {
    const collectionRef = collection(db, "todo-list");
    
    // Create a query with a limit of 1
    const q = query(collectionRef, limit(1));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        // The first document is in the querySnapshot
        const date: Date =  querySnapshot.docs[0].data().dateUpdated.toDate();

        return date;
    }
    return null;
}

const updateTodoList = async (todoList: TodoItem[]) => {
    const collectionRef = collection(db, "todo-list");

    // Create a query with a limit of 1
    const q = query(collectionRef, limit(1));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref

        await updateDoc(docRef, {
            todoList: todoList,
        })
        console.log("firestore todo list Updated");
    }
}

const updateDateUpdated = async () => {
    const now = new Date();
    const collectionRef = collection(db, "todo-list");

    // Create a query with a limit of 1
    const q = query(collectionRef, limit(1));

    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref

    await updateDoc(docRef, {
        dateUpdated: now,
    })

    console.log("firestore date Updated");
    }    
}

export { getTodoList, updateDateUpdated, updateTodoList, getDateUpdated }