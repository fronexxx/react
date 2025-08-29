import type {IUser} from "../models/IUser.ts";

const getUsers = async (): Promise<IUser[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then((value) => value.json());

};

// Для чого окремий файл для фетча? Пояснення нижче:

const getUser = async (id: string): Promise<IUser> => {
    return await fetch(import.meta.env.VITE_API_URL + '/' + id)
        .then((value) => value.json());
};

export {
    getUsers,
    getUser
};
