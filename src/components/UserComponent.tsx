import {type FC, memo} from "react";

// memo не дозволяє реакту лишній раз рендерити компонент UserComponent, що дуже полегшує роботу, якщо компонент справді великий.
export const UserComponent: FC<{ foo: () => void, arr: number[] }> = memo (({arr}) => {
    console.log('user');
    console.log(arr);
    return (
        <div>
            user component
        </div>
    );
});
