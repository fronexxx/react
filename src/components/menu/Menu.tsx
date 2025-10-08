import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/login'}>login</Link></li>
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
        </div>
    );
};

export default Menu;
