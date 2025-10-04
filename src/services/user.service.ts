import axios from "axios";
import type {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'}
});

export const getAllUsers = async (): Promise<void> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    console.log(data);
}

axiosInstance.interceptors.request.use((request) => {
    console.log(request);
    console.log(request.method);
    request.headers.set('XXX', 'XXXX');
    return request;
});

export const saveUser = async (user: IUser): Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>('/users', user);
    console.log(data);
    return data;
};
