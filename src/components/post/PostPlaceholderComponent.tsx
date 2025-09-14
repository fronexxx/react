import type {IPost} from "../../models/placeholder-models/IPost.ts";
import type {FC} from "react";

interface PostPlaceholderComponentProps {
    post: IPost
}

const PostPlaceholderComponent: FC<PostPlaceholderComponentProps> = ({post: {userId, id, title, body }}) => {
    return (
        <div className='mt-2.5 mb-2.5 ml-2.5'>
            <h2 className='text-3xl'>UserId: {userId}. PostId: {id}.</h2>
            <h3 className='text-2xl'>Title: {title}.</h3>
            <p>Body: {body}</p>
        </div>
    );
};

export default PostPlaceholderComponent;
