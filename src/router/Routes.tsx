import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import UsersComponent from "../components/users/UsersComponent.tsx";
import PostsComponent from "../components/posts/PostsComponent.tsx";
import CommentsComponent from "../components/comments/CommentsComponent.tsx";
import ProductsComponent from "../components/products/ProductsComponent.tsx";

export const router = createBrowserRouter([
    {
        path: '/', element: <App/>, children: [
            {path: 'users', element: <UsersComponent/>},
            {path: 'posts', element: <PostsComponent/>},
            {path: 'comments', element: <CommentsComponent/>},
            {path: 'products', element: <ProductsComponent/>},
        ],
    }
]);
