import {Link, Outlet} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/a'}>a page</Link></li>
                <li><Link to={'/b'}>b page</Link></li>
                <hr/>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Menu;
