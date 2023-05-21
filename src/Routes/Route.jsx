import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blogs/Blogs";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProductDetails from "../pages/Shared/ProductDetails/ProductDetails";
import AllToys from "../pages/AllToys/AllToys";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../pages/myToys/myToys";
import AddAtoys from "../pages/AddAtoys/AddAtoys";
import UpdateToy from "../pages/UpdateToy/UpdateToy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <NotFoundPage></NotFoundPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("https://smart-toy-market-server.vercel.app/alltoys")
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>,
                loader: () => fetch("https://smart-toy-market-server.vercel.app/alltoys")
            },
            {
                path: "categories/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://smart-toy-market-server.vercel.app/alltoys/${params.id}`)
            },
            {
                path: "/alltoys/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://smart-toy-market-server.vercel.app/alltoys/${params.id}`)
            },
            {
                path: "/myToys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "/addAtoy",
                element: <AddAtoys></AddAtoys>
            },
            {
                path:'/update/:id',
                element:<UpdateToy></UpdateToy>,
                loader:({params}) =>fetch(`https://smart-toy-market-server.vercel.app/update/${params.id}`)
            }
        ]
    },
]);
export default router
