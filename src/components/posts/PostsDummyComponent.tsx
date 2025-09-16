import {useEffect, useState} from "react";
import {services} from "../../services/service.api.ts";
import PostDummyComponent from "../post/PostDummyComponent.tsx";
import type {IPostDummy} from "../../models/dummy-models/IPostDummy.ts";

const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostDummy[]>([]);
    useEffect(() => {
        services.getDummyPosts()
            .then(response => setPosts(response));
    }, []);
    return (
        <div>
            {
                posts.map(post => <PostDummyComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsDummyComponent;
