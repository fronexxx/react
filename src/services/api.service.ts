import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct} from "../models/IProduct.ts";
import type {IProductsResponseModel} from "../models/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number;
};

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});


axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
});

export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins}); // Сервер віддає нам відповідь
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
};

export const loadAuthProducts = async (): Promise<IProduct[]> => {
    const {data: {products}} = await axiosInstance.get<IProductsResponseModel>('/products');
    return products;
}


export const refresh = async () => {
    const IUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: IUserWithTokens.refreshToken,
        expiresInMins: 1
    });
    IUserWithTokens.accessToken = accessToken;
    IUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(IUserWithTokens));
}
