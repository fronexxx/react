import type {IProducts} from "./IProducts.ts";

export interface IResponseProducts {
    products: IProducts[];
    total: number;
    skip: number;
    limit: number;
}
