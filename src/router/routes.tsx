import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/users-pages/UsersPage.tsx";
import UsersPlaceHolderPage from "../pages/users-pages/UsersPlaceHolderPage.tsx";
import UsersDummyPage from "../pages/users-pages/UsersDummyPage.tsx";
import PostsPage from "../pages/posts-pages/PostsPage.tsx";
import PostsPlaceHolderPage from "../pages/posts-pages/PostsPlaceHolderPage.tsx";
import PostsDummyPage from "../pages/posts-pages/PostsDummyPage.tsx";
import CommentsPage from "../pages/comments-pages/CommentsPage.tsx";
import CommentsPlaceHolderPage from "../pages/comments-pages/CommentsPlaceHolderPage.tsx";
import CommentsDummyPage from "../pages/comments-pages/CommentsDummyPage.tsx";
import HomePage from "../pages/home-page/HomePage.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: 'users', element: <UsersPage/>},
            {path: 'users/jsonplaceholder', element: <UsersPlaceHolderPage/>},
            {path: 'users/dummyjson', element: <UsersDummyPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'posts/jsonplaceholder', element: <PostsPlaceHolderPage/>},
            {path: 'posts/dummyjson', element: <PostsDummyPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {path: 'comments/jsonplaceholder', element: <CommentsPlaceHolderPage/>},
            {path: 'comments/dummyjson', element: <CommentsDummyPage/>},
        ]
    }
]);
