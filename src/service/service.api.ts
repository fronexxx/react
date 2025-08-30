import type {ITodo} from "../model/ITodo.ts";

const endpointTodos = import.meta.env.VITE_API_URL + '/todos';

export const getTodos = async (): Promise<ITodo[]> => {
    return await fetch(endpointTodos)
        .then((response) => response.json())
}
