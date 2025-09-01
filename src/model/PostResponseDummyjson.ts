import type {IPost} from "./IPost.ts";

export interface PostResponseDummyjson {
    posts: IPost[];
    total: number;
    skip: number;
    limit: number;
}
