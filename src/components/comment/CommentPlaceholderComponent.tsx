import type {IComment} from "../../models/IComment.ts";
import type {FC} from "react";

interface CommentPlaceholderComponentProps {
    comment: IComment
}

const CommentPlaceholderComponent: FC<CommentPlaceholderComponentProps> = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div className='m-5'>
            <h2 className='text-3xl'>PostId: {postId}. CommentId: {id}.</h2>
            <h3 className='text-2xl'>Name: {name}.</h3>
            <p>Email: {email}.</p>
            <p>Body: {body}.</p>
        </div>
    );
};

export default CommentPlaceholderComponent;
