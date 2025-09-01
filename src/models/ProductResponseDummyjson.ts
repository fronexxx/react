import type {IProduct} from "./IProduct.ts";

export interface ProductResponseDummyjson {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}
