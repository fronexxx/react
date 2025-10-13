import {useEffect} from "react";
import {login} from "../services/api.service.ts";

const LoginComponent = () => {
    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        })
    }, []);
    return (
        <div>
            LoginComponent
        </div>
    );
};

export default LoginComponent;
