import {useLocation} from "react-router-dom";
import type {IUser} from "../../models/IUser.ts";

const UserDetailsComponent = () => {
    const {state} = useLocation();
    const user = state as IUser;
    return (
        <div>
            {
                user.email
            }
        </div>
    );
};

export default UserDetailsComponent;
