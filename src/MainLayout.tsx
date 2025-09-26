import './App.css'
import {Outlet} from "react-router-dom";
import Menu from "./components/menu-component/Menu.tsx";

function MainLayout() {

    return (
        <div>
            main page
            <Menu/>
            <Outlet/>
        </div>
    );
}

export default MainLayout
