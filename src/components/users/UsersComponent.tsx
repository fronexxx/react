import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {IUser} from "../../models/placeholder-models/IUser.ts";
import type {IUserDummy} from "../../models/dummy-models/IUserDummy.ts";
import {services} from "../../services/service.api.ts";
import UserPlaceholderComponent from "../user/UserPlaceholderComponent.tsx";
import UserDummyComponent from "../user/UserDummyComponent.tsx";

const UsersComponent = () => {
    const {source} = useParams();
    const [users, setUsers] = useState<IUser[]>([]);
    const [dummyUsers, setDummyUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        if(source === 'jsonplaceholder') {
            services.getPlaceholderUsers()
                .then(values => setUsers(values));
        }
        else if (source === 'dummyjson') {
            services.getDummyUsers()
                .then(value => setDummyUsers(value));
        }
    }, [source]);
    return (
        <div>
            {
                source === 'jsonplaceholder' && users.map(user => <UserPlaceholderComponent key={user.id} user={user}/>)
            }
            {
                source === 'dummyjson' && dummyUsers.map(dummyUser => <UserDummyComponent key={dummyUser.id} user={dummyUser}/>)
            }
        </div>
    );
};

export default UsersComponent;
