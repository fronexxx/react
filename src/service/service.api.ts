import type {IComment} from "../model/IComment.ts";

const endpointComment = import.meta.env.VITE_API_URL + '/comments';

export const getComment = async (): Promise<IComment[]> => {
    return await fetch(endpointComment)
        .then((response) => response.json())
}
