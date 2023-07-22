import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import Home from "./pages/Home/index.tsx";
import Header from "./components/Header/index.tsx";
import GlobalStyles from "./styles/global.ts";
import Router from "./routes/index.tsx";
import BasePage from "./pages/BasePage/index.tsx";

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//         <>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//             </Routes>
//         </>
//     )
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        {/* <Header /> */}
        <GlobalStyles />

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/content/:category" element={<App />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
