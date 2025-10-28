import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import UserPage from "../pages/UserPage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'posts', element: <PostsPage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'user/1', element: <UserPage/>},
        ],
    }
]);
