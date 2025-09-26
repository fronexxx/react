import type {IUsersResponse} from "../models/IUsersResponse.ts";
import type {IUser} from "../models/IUser.ts";

const url = 'https://dummyjson.com';

export const getAllUsers = async (page: string): Promise<IUser[]> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response: IUsersResponse = await fetch(url + '/users' + '?skip=' + skip)
        .then((response) => response.json());
    return response.users
}
