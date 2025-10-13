import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";


const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
});

interface ILoginData {
    username: string;
    password: string;
    expiresInMins: number;
}

export const login = ({username, password, expiresInMins}: ILoginData): Promise<IUserWithTokens> => {
    const response = axiosInstance.post('/login', {username, password, expiresInMins});
    return response;
}
