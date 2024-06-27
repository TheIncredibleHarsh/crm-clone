import { Route, Router, Navigate, Routes, BrowserRouter } from "react-router-dom";
import history from "@/browserHistory.js";
import Project from "@/Project";

const AppRoutes = ()=>{
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route path="/project" Component={Project} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;