import {type FC, memo} from "react";

export const UserComponent: FC<{foo: () => void}> = memo (() => {
    console.log('user');
    return (
        <div>
            user component
        </div>
    );
});
