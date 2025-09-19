import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart} from "../../models/ICart.ts";
import CartComponent from "../cart-component/CartComponent.tsx";
import {cartService} from "../../services/api.service.ts";

const CartsComponent = () => {
    const [carts, setCarts] = useState<ICart[]>([]);

    const {id} = useParams();

    console.log(id);
    useEffect(() => {

        if (id) {
            cartService.getCartsOfUser(id)
                .then(({carts}) => {
                    setCarts(carts)
                });
        }

    }, [id]);
    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;
