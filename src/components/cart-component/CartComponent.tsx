import type {ICart} from "../../models/ICart.ts";

interface CartComponentProps {
    cart: ICart
}

const CartComponent = ({cart}: CartComponentProps) => {
    return (
        <div>
            {cart.id} {cart.total} {cart.discountedTotal} {cart.totalProducts} {cart.totalQuantity}
        </div>
    );
};

export default CartComponent;
