import {useEffect} from "react";
import {getAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourcesComponent = () => {
    useEffect(() => {
        getAuthProducts().then((products) => {
            console.log(products);
        }).catch((reason) => {
            console.log(reason);

            refresh().then(() =>
                getAuthProducts().then((products) => {
                    console.log(products);
                }));
        })
    }, []);
    return (
        <div>

        </div>
    );
};

export default AuthResourcesComponent;
