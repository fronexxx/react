import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {services} from "../../services/service.api.ts";
import PostPlaceholderComponent from "../post/PostPlaceholderComponent.tsx";

const PostsPlaceholderComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        services.getPlaceholderPosts().then(response => setPosts(response));
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostPlaceholderComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsPlaceholderComponent;
