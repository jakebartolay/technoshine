import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";

import { appRoutes } from "@/utils/routes";

export default function AdminNotFound() {
  return (
    <div className="admin-shell flex min-h-screen items-center justify-center px-4 py-20">
      <div className="admin-panel w-full max-w-xl text-center">
        <p className="admin-overline text-slate-500">Admin Route</p>
        <h1 className="text-4xl font-black tracking-[-0.05em] text-slate-950">Page not found inside the admin console</h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          Mukhang wala pang route na naka-wire dito. Balik tayo sa main admin overview or sa live site.
        </p>

        <div className="admin-button-row mt-8 justify-center">
          <Link to={appRoutes.admin} className="admin-btn admin-btn--primary">
            <ArrowLeft className="h-4 w-4" />
            Back to Admin
          </Link>
          <Link to={appRoutes.home} className="admin-btn admin-btn--ghost">
            <Home className="h-4 w-4" />
            Open Site
          </Link>
        </div>
      </div>
    </div>
  );
}
