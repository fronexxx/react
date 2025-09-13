import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserPlaceholderComponent from "../user/UserPlaceholderComponent.tsx";
import {services} from "../../services/service.api.ts";

const UsersPlaceholderComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        services.getPlaceholderUsers()
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
