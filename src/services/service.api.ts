import type {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";

export const usersServices = {
    getPlaceholderUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.usersPlaceholderUrl)
            .then((response) => response.json());
    },

}
