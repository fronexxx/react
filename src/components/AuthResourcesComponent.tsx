import {useEffect} from "react";
import {loadProducts, refresh} from "../services/api.service.ts";

export const AuthResourcesComponent = () => {
    useEffect(() => {
        loadProducts().then((data) => {
            console.log(data);
        }).catch((reason) => {
            console.log(reason);

            refresh().then(() => {
                loadProducts().then((data) => {
                    console.log(data);
                })
            });
        });
    }, []);
    return (
        <div>

        </div>
    );
};
