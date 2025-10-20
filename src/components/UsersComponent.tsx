import {useCallback, useEffect, useMemo, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";

const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

    const arr: number[] = useMemo(() => {
        return [1, 2, 3];
    }, []);

    const foo = useCallback(() => {
        console.log('test');
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => setUsers(value));
        return () => {
            console.log('unsubscribed');
        }
    }, []);
    return (
        <div>users component
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;
