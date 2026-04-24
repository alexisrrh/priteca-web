import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";

import { ServicesPage } from "../pages/ServicesPage";
import { WorksPage } from "../pages/WorksPage";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/servicios" element={<ServicesPage />} />
      <Route path="/obras" element={<WorksPage />} />
      <Route path="/contacto" element={<ContactPage />} />
    </Routes>
  );
}