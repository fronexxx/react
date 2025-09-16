import type {IPostDummy} from "./IPostDummy.ts";

export interface IPostResponseDummy {
    posts: IPostDummy[];
    total: number;
    skip: number;
    limit: number;
}
