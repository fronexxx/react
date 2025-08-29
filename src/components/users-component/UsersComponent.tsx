import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

useEffect(() => {
    const fetchData = async () => {
        const users = await getUsers();
        setUsers(users);
    }
    fetchData();

        return () => {
            console.log('done');
        };

    }, []);

    return (
        <>
            {
                users.map((user) => <UserComponent item={user} key={user.id}/>)
            }
        </>
    );
};
