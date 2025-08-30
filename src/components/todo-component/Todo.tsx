import type {FC} from "react";
import type {ITodo} from "../../model/ITodo.ts";


type TodoProps = { todo: ITodo };
export const Todo: FC<TodoProps> = ({todo: {id, title, completed}}) => {
    return (
        <div>
            {id}. {title}, {completed.toString()}
        </div>
    );
};
