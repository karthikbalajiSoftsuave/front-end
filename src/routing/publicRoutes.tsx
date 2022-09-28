import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "../pages/about";
import ContactUs from "../pages/contactUs";
import HomePage from "../pages/homePage";
import ProjectPage from "../pages/projects";
import ServicePage from "../pages/services";

export const PublicRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicePage />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    )
}                         
