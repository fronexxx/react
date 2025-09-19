import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <span><Link to={'users'}>Show All Users</Link></span>
        </div>
    );
};

export default MenuComponent;
