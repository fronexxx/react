import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/cars'}>Cars</Link>
                </li>

                <li>
                    <Link to={'/cars/create'}>create</Link>
                </li>

            </ul>
        </div>
    );
};

export default Menu;
