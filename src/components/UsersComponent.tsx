import {useEffect, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(value => setUsers(value));
    }, []);
    console.log('test');
    return (
        <div>users component
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;
