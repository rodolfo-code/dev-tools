import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";

export default function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
