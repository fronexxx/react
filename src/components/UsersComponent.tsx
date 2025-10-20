import {useCallback, useMemo} from "react";
import {UserComponent} from "./UserComponent.tsx";
import {useFetch} from "../hooks/useFetch.tsx";

const UsersComponent = () => {
    console.log('users');
    const users = useFetch();

    const arr: number[] = useMemo(() => {
        return [1, 2, 3];
    }, []);

    const foo = useCallback(() => {
        console.log('test');
    }, []);
    return (
        <div>users component
            {
                users.map(value => <UserComponent item={value} foo={foo} arr={arr}/>)
            }
        </div>
    );
};

export default UsersComponent;
