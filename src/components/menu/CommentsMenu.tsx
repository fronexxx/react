import { Link } from "react-router-dom";

const CommentsMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Comments from jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Comments from dummyjson</Link></li>
            </ul>
        </div>
    );
};

export default CommentsMenu;
