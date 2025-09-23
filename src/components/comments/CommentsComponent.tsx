import {useParams} from "react-router-dom";

const CommentsComponent = () => {
    const {source} = useParams();

    return (
        <div>
            {
                source === 'jsonplaceholder' && <h1>Comments from jsonplaceholder</h1>
            }
            {
                source === 'dummyjson' && <h1>Comments from dummyjson</h1>
            }
        </div>
    );
};

export default CommentsComponent;
