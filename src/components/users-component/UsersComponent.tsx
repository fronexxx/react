import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [item, setItem] = useState<IUser | null>(null);

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

    const foo = (item: IUser) => {
        setItem(item);
    };

    return (
        <>
            {item && (
                <div>
                    <h3>Name: {item.name}</h3>
                    <h4>Username: {item.username}</h4>
                    <h5>Email: {item.email}</h5>
                    <p>Phone: {item.phone}</p>
                    <p>Website: {item.website}</p>
                    <p>Street: {item.address.street}</p>
                </div>

            )}
            {
                users.map((user) => <UserComponent foo={foo} item={user} key={user.id}/>)
            }
        </>

    );
};
