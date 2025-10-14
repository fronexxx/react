import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProducts} from "../models/IProducts.ts";
import type {IResponseProducts} from "../models/IResponseProducts.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {IAccessAndRefreshToken} from "../models/IAccessAndRefreshToken.ts";


const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

interface ILoginData {
    username: string;
    password: string;
    expiresInMins: number;
}

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})

export const login = async ({username, password, expiresInMins}: ILoginData): Promise<IUserWithTokens> => {
    const {data: UserWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(UserWithTokens);
    localStorage.setItem('user', JSON.stringify(UserWithTokens));
    return UserWithTokens;
};

export const getAuthProducts = async (): Promise<IProducts[]> => {
    const {data: {products}} = await axiosInstance.get<IResponseProducts>('/products');
    return products;
}

export const refresh = async () => {
    const IUserWithToken = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<IAccessAndRefreshToken>('/refresh', {
        refreshToken: IUserWithToken.refreshToken,
        expiresInMins: 1
    });
    IUserWithToken.accessToken = accessToken;
    IUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(IUserWithToken));
}
