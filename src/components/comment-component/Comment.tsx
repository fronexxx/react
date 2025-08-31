import type {IComment} from "../../model/IComment.ts";
import type {FC} from "react";
import './Comment.css';

type CommentPropsType = {
    comment: IComment
}

export const Comment: FC<CommentPropsType> = ({comment: {id, name, email, body}}) => {
    return (
        <div className='mt-4 mb-4'>
            <div className='ml-2.5'>
                <h3 className='text-2xl'>ID: {id}. Name: {name}</h3>
                <p className='font-medium'>Email: {email}</p>
                <p>Description: {body}.</p>
            </div>
        </div>
    );
};
