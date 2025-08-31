import type {IPost} from "../../model/IPost.ts";
import type {FC} from "react";
import './Post.css'
type PostPropsType = {
    post: IPost
}

export const Post: FC<PostPropsType> = ({post: {id, title, body}}) => {
    return (
        <div className='mb-4 mt-4 ml-5 mr-5 bg-cyan-700'>
            <h3 className='text-2xl pl-2.5 pt-3'>{id}. {title}</h3>
            <p className='pl-2.5 pb-2'>{body}</p>
        </div>
    );
};
