import type {Support} from "./Support.ts";
import type {IUser} from "./IUser.ts";

export interface IReqResInResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: Support;
}
