import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {userSliceActions} from "../redux/slices/userSlice/userSlice.ts";

const UserPage = () => {
    const {id} = useParams();

    const {userSlice: {user}} = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(id) dispatch(userSliceActions.loadUser(id))
    }, [id]);

    return (

        <div>
            {user && <div>{user.id} {user.name}</div>}
        </div>
    );
};

export default UserPage;
