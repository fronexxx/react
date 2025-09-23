import {useParams} from "react-router-dom";

const PostsComponent = () => {
    const {source} = useParams();

    return (
        <div>
            {
                source === 'jsonplaceholder' && <h1>Posts from jsonplaceholder</h1>
            }
            {
                source === 'dummyjson' && <h1>Posts from dummyjson</h1>
            }
        </div>
    );
};

export default PostsComponent;
