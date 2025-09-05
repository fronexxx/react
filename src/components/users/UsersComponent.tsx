import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

const UsersComponent = () => {
    const [users, usersSet] = useState<IUser[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await userService.getUsers();
            usersSet(response);
        }
        fetchData();
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComponent item={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;
