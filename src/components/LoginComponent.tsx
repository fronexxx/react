import {useEffect} from "react";

const LoginComponent = () => {
    useEffect(() => {
        login(
            'emilys',

        )
            .then(value => console.log(value));
    }, []);
    return (
        <div>
            LoginComponent
        </div>
    );
};

export default LoginComponent;
