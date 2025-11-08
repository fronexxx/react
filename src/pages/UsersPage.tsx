import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userActions} from "../redux/slices/UserSlice.ts";

export const UsersPage = () => {

    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.userStoreSlice.users);
    useEffect(() => {
        dispatch(userActions.loadUsers());
    }, []);
    return (
        <div>
            {users.map(user => <div key={user.id}>{user.name}</div>)}
        </div>
    );
};
