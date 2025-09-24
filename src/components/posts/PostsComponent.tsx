import {useEffect, useState} from "react";
import type {IPost} from "../../models/placeholder-models/IPost.ts";
import type {IPostDummy} from "../../models/dummy-models/IPostDummy.ts";
import {useParams} from "react-router-dom";
import {services} from "../../services/service.api.ts";
import PostPlaceholderComponent from "../post/PostPlaceholderComponent.tsx";
import PostDummyComponent from "../post/PostDummyComponent.tsx";

const PostsComponent = () => {
    const {source} = useParams();
    const [posts, setPosts] = useState<IPost[]>([]);
    const [dummyPosts, setDummyPosts] = useState<IPostDummy[]>([]);
    useEffect(() => {
        if(source === 'jsonplaceholder') {
            services.getPlaceholderPosts()
                .then(value => setPosts(value));
        }
        else if (source === 'dummyjson'){
            services.getDummyPosts()
                .then(value => setDummyPosts(value));
        }
    }, [source]);
    return (
        <div>
            {
                source === 'jsonplaceholder' && posts.map(post => <PostPlaceholderComponent key={post.id} post={post}/>)
            }
            {
                source === 'dummyjson' && dummyPosts.map(dummyPost => <PostDummyComponent key={dummyPost.id} post={dummyPost}/>)
            }
        </div>
    );
};

export default PostsComponent;
