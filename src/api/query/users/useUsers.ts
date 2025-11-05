import {useQuery} from "@tanstack/react-query";
import {useApi} from "../../../use-api/use-api.ts";

interface IUser {
    id: number;
    name: string;
}

export const useUsers = () => {
    const {get} = useApi<IUser[]>();
    return useQuery({

        queryKey: ['users'],
        queryFn: async (): Promise<IUser[]> => {
            return get({route: '/users'})
        },
    });
};
