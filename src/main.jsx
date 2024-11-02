import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import Home from "./components/home/index.jsx";
import TableUser from "./components/users/index.jsx";
import TableDepartment from "./components/departments/index.jsx";
import LoginPage from "./pages/login/index.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: "users",
                element: <TableUser />,
            },
            {
                path: "departments",
                element: <TableDepartment />,
            },
        ],
    },
    {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
