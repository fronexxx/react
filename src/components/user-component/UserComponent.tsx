import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";


type UserPropsType = {
    item: IUser;
}
const UserComponent: FC<UserPropsType> = ({item}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <p>{item.email}</p>
        </div>
    );
};

export default UserComponent;
