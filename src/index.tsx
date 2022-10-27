import React from "react";
import ReactDOM from "react-dom";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import DetailView from './components/DetailView';
import ListView from './components/ListView';
import ErrorPage from './components/ErrorPage';
import Root from './components/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <ListView />,
            },
            {
                path: "/list",
                element: <ListView />,
            }, {
                path: "/detail/:productId",
                element: <DetailView />,
            },
        ],
    },
]);

ReactDOM.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
    document.getElementById("app"));