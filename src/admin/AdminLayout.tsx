import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, MonitorCog, PencilRuler } from "lucide-react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { AdminWorkspaceProvider } from "@/admin/AdminWorkspaceContext";
import AdminSidebar from "@/admin/components/AdminSidebar";
import { usePageBranding } from "@/hooks/usePageBranding";
import { appRoutes } from "@/utils/routes";

import "./admin.css";

function getAdminMeta(pathname: string) {
  if (pathname === appRoutes.adminStudio) {
    return {
      title: "Studio",
      subtitle: "Edit page copy, CTA text, and visual direction in one place.",
    };
  }

  if (pathname === appRoutes.adminLibrary) {
    return {
      title: "Media",
      subtitle: "Manage page pictures and keep uploads organized by page.",
    };
  }

  if (pathname === appRoutes.adminSettings) {
    return {
      title: "Workspace",
      subtitle: "Review session status and use local reset tools when needed.",
    };
  }

  return {
    title: "Dashboard",
    subtitle: "Monitor page status, media totals, and quick admin actions.",
  };
}

export default function AdminLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const meta = getAdminMeta(location.pathname);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setSidebarOpen(false);
  }, [location.pathname]);

  usePageBranding("TECHNOSHINE | Admin Console", "technoshine");

  return (
    <div className="admin-shell">
      <AdminWorkspaceProvider>
        <div className="admin-grid">
          <AdminSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <div className="admin-main">
            <header className="admin-topbar">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="admin-icon-button admin-mobile-menu"
                  onClick={() => setSidebarOpen(true)}
                  aria-label="Open admin navigation"
                >
                  <Menu className="h-4 w-4" />
                </button>

                <div>
                  <p className="admin-overline">Admin Console</p>
                  <h1 className="admin-topbar-title">{meta.title}</h1>
                  <p className="admin-topbar-subtitle">{meta.subtitle}</p>
                </div>
              </div>

              <div className="admin-topbar-actions">
                <div className="admin-topbar-pill">
                  <MonitorCog className="h-4 w-4" />
                  <span>Local Session</span>
                </div>
                <div className="admin-topbar-pill">
                  <PencilRuler className="h-4 w-4" />
                  <span>Content + Images</span>
                </div>

                <Link to={appRoutes.home} className="admin-topbar-link">
                  Live Site
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </header>

            <main className="admin-content">
              <Outlet />
            </main>
          </div>
        </div>
      </AdminWorkspaceProvider>
    </div>
  );
}
