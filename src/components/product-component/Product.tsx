import type {IProduct} from "../../models/IProduct.ts";
import type {FC} from "react";
import './Product.css';

interface ProductProps {
    product: IProduct
}

export const Product: FC<ProductProps> = ({product:{id, title, description, category, price}}) => {
    return (
        <div className='m-5'>
            <div className='flex flex-col gap-3'>
                <h2 className='text-2xl font-bold font-sans'>{id}. {title}</h2>
                <p>{description}</p>
                <p className='text-sm'><span>Category: {category};</span> <span>Price: {price}$</span></p>
            </div>
        </div>
    );
};
