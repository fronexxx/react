import type {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../models/IPost.ts";
import type {IComment} from "../models/IComment.ts";

export const services = {
    getPlaceholderUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.usersPlaceholderUrl)
            .then((response) => response.json());
    },
    getPlaceholderPosts: async (): Promise<IPost[]> => {
        return await fetch(urls.posts.postsPlaceholderUrl)
            .then((response) => response.json())
    },
    getPlaceholderComments: async (): Promise<IComment[]> => {
        return await fetch(urls.comments.commentsPlaceholderUrl)
            .then((response) => response.json())
    },

}
