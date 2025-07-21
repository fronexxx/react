import type {FC, ReactNode} from "react";


type MyComponentPropType = {
    title: string;
    children?: ReactNode;
};

const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div className='underline'>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    );
};
export default MyComponent;

