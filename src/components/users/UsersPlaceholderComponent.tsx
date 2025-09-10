import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {usersServices} from "../../services/service.api.ts";
import UserPlaceholderComponent from "../user/UserPlaceholderComponent.tsx";

const UsersPlaceholderComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        usersServices.getPlaceholderUsers()
            .then(response => setUsers(response));
    }, []);
    return (
        <div>
            {
                users.map(user => <UserPlaceholderComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersPlaceholderComponent;
