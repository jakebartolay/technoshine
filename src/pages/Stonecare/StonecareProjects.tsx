import { Navigate } from "react-router-dom";

import { appRoutes } from "@/utils/routes";

export default function StonecareProjects() {
  return <Navigate to={`${appRoutes.stonecare}#gallery`} replace />;
}
