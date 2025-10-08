import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

const AuthResourceComponent = () => {
    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products)
        }).catch(reason => {
            console.log(reason)

            refresh()
                .then(() => loadAuthProducts())
                .then(products => {
                    console.log(products)
                });
        });
    }, []);
    return (
        <div>

        </div>
    );
};

export default AuthResourceComponent;
