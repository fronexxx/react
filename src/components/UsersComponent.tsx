import {useCallback, useEffect, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";

const UsersComponent = () => {
    console.log('users');
    const [users, setUsers] = useState([]);

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
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;
