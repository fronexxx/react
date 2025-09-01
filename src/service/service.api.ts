import type {IProduct} from "../models/IProduct.ts";
import type {ProductResponseDummyjson} from "../models/ProductResponseDummyjson.ts";

const endpointProduct = import.meta.env.VITE_API_URL + '/products';

export const getProduct = async (): Promise<IProduct[]> => {

    const responseProduct: ProductResponseDummyjson = await fetch(endpointProduct)
        .then(response => response.json());
    return responseProduct.products;

}
