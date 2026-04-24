import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { AboutPage } from "../pages/AboutPage";
import { ProductsPage } from "../pages/ProductsPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { CatalogsPage } from "../pages/CatalogsPage";
import { ContactPage } from "../pages/ContactPage";
import { MelaminaPage } from "../pages/MelaminaPage";
import { PiedrasPage } from "../pages/PiedrasPage";
import { DisenoInterioresPage } from "../pages/DisenoInterioresPage";


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nosotros" element={<AboutPage />} />
      <Route path="/productos" element={<ProductsPage />} />
      <Route path="/proyectos" element={<ProjectsPage />} />
      <Route path="/catalogos" element={<CatalogsPage />} />
      <Route path="/contacto" element={<ContactPage />} />
      <Route path="/proyectos/melamina" element={<MelaminaPage />} />
      <Route path="/proyectos/piedras" element={<PiedrasPage />} />
<Route path="/proyectos/diseno-interiores" element={<DisenoInterioresPage />} />

    </Routes>
  );
}


