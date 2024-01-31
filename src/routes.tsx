import type { RouteObject } from "react-router-dom";
import App from "./App";

const routeTree: RouteObject[] = [
    {
        path: "/",
        element: <App />,
    },
];
export { routeTree };
