import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

interface UserComponentProps {
    user: IUser
}


export const UserComponent = ({user}: UserComponentProps) => {
    const navigation = useNavigate();
    const onButtonClickNavigate = () => {
        navigation('/users/' + user.id + '/carts')
    };

    return (
        <div className='flex flex-col gap-2 my-5 ml-5'>
            <div>{user.username}: {user.email}</div>
            <button className='border-1 bg-gray-200 w-30 cursor-pointer' onClick={onButtonClickNavigate}>Click me</button>
        </div>
    );
};
