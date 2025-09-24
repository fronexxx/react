import {Link} from "react-router-dom";
import './menu.css';

const Menu = () => {
    return (
        <div>
            <ul className={'main-menu'}>
                <li><Link to={''}>home</Link></li>
                <li><Link to={'users/jsonplaceholder'}>users from jsonplaceholder</Link></li>
                <li><Link to={'users/dummyjson'}>users from dummyjson</Link></li>
                <li><Link to={'posts/jsonplaceholder'}>posts from jsonplaceholder</Link></li>
                <li><Link to={'posts/dummyjson'}>posts from dummyjson</Link></li>
                <li><Link to={'comments/jsonplaceholder'}>comments from jsonplaceholder</Link></li>
                <li><Link to={'comments/dummyjson'}>comments from dummyjson</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
