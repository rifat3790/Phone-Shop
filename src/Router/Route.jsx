import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";
import Errorpages from "../Pages/ErrorPages/Errorpages";
import Phone from "../Pages/Phone/Phone";

const myCreateRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpages></Errorpages>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/phones.json')
            },
            {
                path: "/favorites",
                element: <Favourites></Favourites>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: '/phones/:id',
                element: <Phone></Phone>,
                loader: () => fetch('/phones.json')
            }
        ]
    }
])

export default myCreateRoute;