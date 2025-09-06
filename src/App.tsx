import './App.css'
import Menu from "./components/Menu/Menu.tsx";
import {Outlet} from "react-router-dom";

function App() {

    return (
        <>
            <Menu/>
            <hr/>
            <Outlet/>
        </>
    );
}

export default App
