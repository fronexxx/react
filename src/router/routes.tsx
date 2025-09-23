import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/users-pages/UsersPage.tsx";
import PostsPage from "../pages/posts-pages/PostsPage.tsx";
import CommentsPage from "../pages/comments-pages/CommentsPage.tsx";
import HomePage from "../pages/home-page/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users/:source', element: <UsersPage/>},
            {path: 'posts/:source', element: <PostsPage/>},
            {path: 'comments/:source', element: <CommentsPage/>},
        ]
    }
]);
