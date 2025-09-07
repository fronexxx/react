import { Link } from "react-router-dom";

const PostsMenu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'jsonplaceholder'}>Posts from jsonplaceholder</Link></li>
                <li><Link to={'dummyjson'}>Posts from dummyjson</Link></li>
            </ul>
        </div>
    );
};

export default PostsMenu;
