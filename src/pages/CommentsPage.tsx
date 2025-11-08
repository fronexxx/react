import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {commentActions} from "../redux/slices/CommentSlice.ts";

export const CommentsPage = () => {
    const dispatch = useAppDispatch();
    const comments = useAppSelector(state => state.commentStoreSlice.comments);
    useEffect(() => {
        dispatch(commentActions.loadComments())
    }, []);
    return (
        <div>
            {
                comments.map(comment => <div key={comment.id}>{comment.name}</div>)
            }
        </div>
    );
};
