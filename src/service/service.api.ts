import type {IPost} from "../model/IPost.ts";

const endpointPosts = import.meta.env.VITE_API_URL + '/posts';

export const getPosts = async (): Promise<IPost[]> => {
    return await fetch(endpointPosts)
        .then((response) => response.json())
}
