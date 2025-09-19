import {Outlet} from "react-router-dom";
import MenuComponent from "../components/Menu/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <MenuComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
