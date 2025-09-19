import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    user: IUser;
};

const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            Name of the User: { user.firstName }
        </div>
    );
};

export default UserComponent;
