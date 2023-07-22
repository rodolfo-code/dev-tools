import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./index.css";
import router from "./routes/index.tsx";
import GlobalStyles from "./styles/global.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <GlobalStyles />
        <RouterProvider router={router} />
    </React.StrictMode>
);
