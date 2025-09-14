import {useEffect, useState} from "react";
import type {IUserDummy} from "../../models/dummy-models/IUserDummy.ts";
import {services} from "../../services/service.api.ts";
import UserDummyComponent from "../user/UserDummyComponent.tsx";

const UsersDummyComponent = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);
    useEffect(() => {
        services.getDummyUsers()
            .then(response => setUsers(response));
    }, []);
    return (
        <div>
            {
                users.map(user => <UserDummyComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersDummyComponent;
