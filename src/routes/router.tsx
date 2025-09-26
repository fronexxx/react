import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../MainLayout.tsx";
import {PaginationLayout} from "../layouts/PaginationLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {
                path: '', element: <PaginationLayout/>, children: [
                    {path: 'users', element: <UsersPage/>}
                ]
            },
        ],
    }
]);
