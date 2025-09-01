import type {IPost} from "../model/IPost.ts";
import type {PostResponseDummyjson} from "../model/PostResponseDummyjson.ts";

const endpointPosts = import.meta.env.VITE_API_URL + '/posts';

export const getPosts = async (): Promise<IPost[]> => {
    const {posts}: PostResponseDummyjson = await fetch(endpointPosts)
        .then((response) => response.json());
    return posts;
};
