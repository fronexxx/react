import { Link } from "react-router-dom";

const UsersMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Users from json placeholder</Link></li>
                <li><Link to={'dummyjson'}>Users from dummyjson</Link></li>
            </ul>
        </div>
    );
};

export default UsersMenu;
