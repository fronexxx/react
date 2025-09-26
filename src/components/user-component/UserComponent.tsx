import type {IUser} from "../../models/IUser.ts";

interface UserComponentProps {
    user: IUser
}

const UserComponent = ({user}: UserComponentProps) => {
    return (
        <div>
            {user.id}. {user.username}
        </div>
    );
};

export default UserComponent;
