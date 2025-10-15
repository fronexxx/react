import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponse} from "../models/IProductsResponse.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";


const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

interface LoginData {
    username: string;
    password: string;
    expiresInMins: number;
}

axiosInstance.interceptors.request.use((objectRequest) => {
    if (objectRequest.method?.toUpperCase() === 'GET') {
        objectRequest.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return objectRequest;
})

export const login = async ({username, password, expiresInMins}: LoginData) => {
    const {data: UserWithToken} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(UserWithToken);
    localStorage.setItem('user', JSON.stringify(UserWithToken));
    return UserWithToken;
}

export const loadProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponse>('/products');
    return products;
};

export const refresh = async () => {
    const UserWithToken = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: UserWithToken.refreshToken,
        expiresInMins: 1,
    });
    UserWithToken.accessToken = accessToken;
    UserWithToken.refreshToken = refreshToken;

    localStorage.setItem('user', JSON.stringify(UserWithToken));

};
