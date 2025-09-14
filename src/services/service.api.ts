import type {IUser} from "../models/placeholder-models/IUser.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../models/placeholder-models/IPost.ts";
import type {IComment} from "../models/placeholder-models/IComment.ts";
import type {IUserResponseDummy} from "../models/dummy-models/IUserResponseDummy.ts";
import type {IUserDummy} from "../models/dummy-models/IUserDummy.ts";

export const services = {
    getPlaceholderUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.usersPlaceholderUrl)
            .then((response) => response.json());
    },
    getDummyUsers: async (): Promise<IUserDummy[]> => {
        const response: IUserResponseDummy = await fetch(urls.users.usersDummyUrl)
            .then((response) => response.json());
        return response.users;
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
