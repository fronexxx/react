import {useEffect} from "react";
import {getAuthProducts} from "../services/api.service.ts";

const AuthResourcesComponent = () => {
    useEffect(() => {
        getAuthProducts()
            .then(value => console.log(value));
    }, []);
    return (
        <div>

        </div>
    );
};

export default AuthResourcesComponent;
