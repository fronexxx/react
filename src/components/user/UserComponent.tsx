import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropsType = {
    item: IUser
}

const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div>
            {
                item.id
            }.
            {item.username}
        </div>
    );
};

export default UserComponent;
