import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {useEffect} from "react";
import {userActions} from "../redux/slices/UserSlice.ts";
import {postActions} from "../redux/slices/PostSlice.ts";
import {commentActions} from "../redux/slices/CommentSlice.ts";

export const ComplexPage = () => {
    const dispatch = useAppDispatch();
    const {commentStoreSlice:{comments}, userStoreSlice:{users}, postStoreSlice:{posts}} = useAppSelector(state => state);

    useEffect(() => {
        if (!users.length) dispatch(userActions.loadUsers());
        if (!posts.length) dispatch(postActions.loadPosts());
        if (!comments.length) dispatch(commentActions.loadComments());
    }, []);
    return (
        <div>
            {
                users.map(user => <div key={user.id}>{user.name}</div>)
            }
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
            {
                comments.map(comment => <div key={comment.id}>{comment.name}</div>)
            }
        </div>
    );
};
