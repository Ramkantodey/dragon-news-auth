import { createBrowserRouter, Link, Navigate } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layout/AuthLayout";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>,
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>,
                loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

            }
        ]
    },
    {
        path: '/news',
        element: <h2>News Layout</h2>
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <h1>loginnnnnnnnnnnnn</h1>
            },
            {
                path: '/auth/register',
                element: <h2>registerrrrrrrrrrrr</h2>
            }
        ]
    },
    {
        path: '*',
        element: <>
            <div className="flex flex-col items-center justify-center">
                <div className="">
                    <img src="https://i.ibb.co.com/2yqdW8B/error.png" alt="" />
                </div>
                <Link to='/'><button className="btn btn-secondary">Go to Home</button></Link>
            </div>
        </>
    }
])

export default Router;