import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul className='flex justify-around'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/users'}>Users</Link></li>
                <li><Link to={'/posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export default MenuComponent;
