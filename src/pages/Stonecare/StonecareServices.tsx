import { Navigate } from "react-router-dom";

import { appRoutes } from "@/utils/routes";

export default function StonecareServices() {
  return <Navigate to={`${appRoutes.stonecare}#services`} replace />;
}
