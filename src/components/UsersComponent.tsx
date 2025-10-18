import {useEffect, useState} from "react";

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
            <UsersComponent/>
        </div>
    );
};

export default UsersComponent;
