import type {ICommentDummy} from "./ICommentDummy.ts";

export interface ICommentResponseDummy {
    comments: ICommentDummy[];
    total: number;
    skip: number;
    limit: number;
}
