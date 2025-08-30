import {useEffect, useState} from "react";
import {getTodos} from "../../service/service.api.ts";
import type {ITodo} from "../../model/ITodo.ts";
import {Todo} from "../todo-component/Todo.tsx";

export const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        getTodos().then(value => setTodos(value));
    }, []);

    return (
        <div>
            {
                todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
            }
        </div>
    );
};
