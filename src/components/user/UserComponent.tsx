import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('posts/' + item.id, {state: item})
    };
    return (
        <div>
            {
                item.id
            }.
            <Link to={'details'} state={item}>{item.username}</Link>
            <button onClick={handleOnClick}>Show Posts</button>
        </div>
    );
};

export default UserComponent;
