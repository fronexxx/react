import {useQuery} from "@tanstack/react-query";

interface IUser {
    id: number;
    name: string;
}

export const useUser = ({userId}: {userId: string}) => {
    return useQuery({

        queryKey: ['users', userId],
        queryFn: async (): Promise<IUser[]> => {
            return await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then((response) => response.json())
        },
    });
};
