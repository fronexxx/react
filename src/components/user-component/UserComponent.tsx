import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";


type UserPropsType = {
    item: IUser;
    foo: (item: IUser) => void
};

const UserComponent: FC<UserPropsType> = ({item, foo}) => {
    return (
        <>
            <h3>{item.name}</h3>
            <button onClick={() => {
                 foo(item)
            }}>details</button>
        </>
    );
};

export default UserComponent;
