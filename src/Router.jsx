//eslint-disable-next-line
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./ErrorPage.jsx";
import MainPageFrame from "./MainPageFrame.jsx";

export default function Router(){
    const router= createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "mainPageFrame/:name",
            element: <MainPageFrame />
        },
    ])

    return <RouterProvider router={router} />;
}