import type {IUser} from "../models/placeholder-models/IUser.ts";
import {urls} from "../constants/urls.ts";
import type {IPost} from "../models/placeholder-models/IPost.ts";
import type {IComment} from "../models/placeholder-models/IComment.ts";
import type {IUserResponseDummy} from "../models/dummy-models/IUserResponseDummy.ts";
import type {IUserDummy} from "../models/dummy-models/IUserDummy.ts";
import type {IPostDummy} from "../models/dummy-models/IPostDummy.ts";
import type {IPostResponseDummy} from "../models/dummy-models/IPostResponseDummy.ts";
import type {ICommentDummy} from "../models/dummy-models/ICommentDummy.ts";
import type {ICommentResponseDummy} from "../models/dummy-models/ICommentResponseDummy.ts";

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
    getDummyPosts: async (): Promise<IPostDummy[]> => {
      const response: IPostResponseDummy = await fetch(urls.posts.postsDummyUrl)
            .then((response) => response.json());
      return response.posts;
    },
    getPlaceholderComments: async (): Promise<IComment[]> => {
        return await fetch(urls.comments.commentsPlaceholderUrl)
            .then((response) => response.json())
    },
    getDummyComments: async (): Promise<ICommentDummy[]> => {
        const response: ICommentResponseDummy = await fetch(urls.comments.commentsDummyUrl)
            .then((response) => response.json());
        return response.comments;
    },

}
