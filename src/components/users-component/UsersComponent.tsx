import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/service.api.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {useSearchParams} from "react-router-dom";

const UsersComponent = () => {
    const [searchParams] = useSearchParams({page: '1'});
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getAllUsers(currentPage)
            .then(response => setUsers(response));
    }, [searchParams]);
    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
