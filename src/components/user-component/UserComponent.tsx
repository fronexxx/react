import type {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            <div>{user.first_name} {user.last_name}</div>
            <img src={user.avatar} alt={user.first_name}/>
        </div>
    );
};

export default UserComponent;
