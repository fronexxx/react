import {useEffect, useState} from "react";
import type {IProduct} from "../../models/IProduct.ts";
import {getProduct} from "../../service/service.api.ts";
import {Product} from "../product-component/Product.tsx";

export const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await getProduct();
            setProducts(response);
        };
        fetchData();
    }, []);
    return (
        <div>
            {
                products.map((product: IProduct) => <Product product={product} key={product.id}/>)
            }
        </div>
    );
};
