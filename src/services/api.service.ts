import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = 'https://dummyjson.com';
export const userService = {
    getAllUsers: async (): Promise<IUserResponseModel> => {
        return await fetch(baseUrl + '/users')
            .then((response) => response.json())
    },
};
export const cartService = {
    getCartsOfUser: async (id: string): Promise <ICartResponseModel> => {
        return await fetch(baseUrl + '/cart/user/' + id)
            .then(res => res.json());
    },
};
