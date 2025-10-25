import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";
import './AA.css';
export const AA = () => {
    const {theme} = useContext(MyContext);
    return (
        <div className={theme}>
            this is AA component, and theme value is {theme}
        </div>
    );
};
