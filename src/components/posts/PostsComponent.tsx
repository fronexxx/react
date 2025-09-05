import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postServices} from "../../services/api.service.ts";

type PostsTypeProps = {
    userId: string;
}
const PostsComponent: FC<PostsTypeProps> = ({userId}) => {
    const [posts, postsSet] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId) {
            console.log(userId, 'exists');
            postServices.getAllPostsOfUserById(+userId)
                .then(response => {
                    console.log(response);
                    postsSet(response);
                });

        }
    }, [userId]);
    return (
        <div>
            {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
    );
};

export default PostsComponent;
