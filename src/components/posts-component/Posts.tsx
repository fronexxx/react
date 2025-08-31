import {useEffect, useState} from "react";
import {getPosts} from "../../service/service.api.ts";
import {Post} from "../post-component/Post.tsx";
import type {IPost} from "../../model/IPost.ts";

export const Posts = () => {
const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getPosts();
            setPosts(response);
        };
        fetchData();
    }, []);
    return (
        <>
            {
                posts.map((post) => <Post post={post} key={post.id}/>)
            }
        </>
    );
};
