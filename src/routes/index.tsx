import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "../pages/Home";
import App from "../pages/MainContent";
import BasePage from "../pages/BasePage";
import MainContent from "../pages/MainContent";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="/content/:category" element={<MainContent />} />
        </Route>
    )
);

export default router;
