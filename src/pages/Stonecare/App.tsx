import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import StonecareLanding from "@/pages/Stonecare/StonecareLanding";
import StonecareProjects from "@/pages/Stonecare/StonecareProjects";
import StonecareServices from "@/pages/Stonecare/StonecareServices";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StonecareLanding />} />
        <Route path="/services" element={<StonecareServices />} />
        <Route path="/projects" element={<StonecareProjects />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

