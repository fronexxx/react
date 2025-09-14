import type {IUserDummy} from "./IUserDummy.ts";

export interface IUserResponseDummy {
    users: IUserDummy[];
    total: number;
    skip: number;
    limit: number;
}
