import './App.css'
import {Outlet} from "react-router";
import Menu from "./components/Menu.tsx";

function App() {

    return (
        <>
            <Menu/>
            <Outlet/>
        </>
    );
}

export default App
