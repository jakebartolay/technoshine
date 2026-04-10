import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Blocks,
  LayoutDashboard,
  PanelLeftClose,
  Settings2,
  Sparkles,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

import { appRoutes } from "@/utils/routes";

type AdminSidebarProps = {
  open: boolean;
  onClose: () => void;
};

type AdminNavItem = {
  label: string;
  description: string;
  to: string;
  icon: LucideIcon;
  end?: boolean;
};

const adminNavItems: AdminNavItem[] = [
  {
    label: "Dashboard",
    description: "Pages, status, and quick actions",
    to: appRoutes.admin,
    icon: LayoutDashboard,
    end: true,
  },
  {
    label: "Studio",
    description: "Edit content and page copy",
    to: appRoutes.adminStudio,
    icon: Sparkles,
  },
  {
    label: "Media",
    description: "Add and delete page images",
    to: appRoutes.adminLibrary,
    icon: Blocks,
  },
  {
    label: "Workspace",
    description: "Session controls and reset tools",
    to: appRoutes.adminSettings,
    icon: Settings2,
  },
];

export default function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  return (
    <>
      <button
        type="button"
        className={`admin-sidebar-backdrop ${open ? "is-visible" : ""}`}
        onClick={onClose}
        aria-label="Close admin sidebar backdrop"
      />

      <aside className={`admin-sidebar ${open ? "is-open" : ""}`}>
        <div className="admin-sidebar-head">
          <div className="admin-brand">
            <div className="admin-brand-mark">TS</div>
            <div>
              <p className="admin-sidebar-kicker">Technoshine</p>
              <p className="admin-sidebar-title">Admin Console</p>
            </div>
          </div>

          <button
            type="button"
            className="admin-icon-button admin-sidebar-close"
            onClick={onClose}
            aria-label="Close admin navigation"
          >
            <PanelLeftClose className="h-4 w-4" />
          </button>
        </div>

        <div className="admin-sidebar-note">
          <p className="m-0 text-sm font-semibold text-slate-100">Local admin workspace</p>
          <p className="mt-2 text-sm leading-7 text-slate-300">
            Nandito ang content editor at picture manager para sa Home, Trading, Construction, at Stonecare.
          </p>

          <div className="admin-chip-row">
            <span className="admin-chip admin-chip--dark">4 Managed Pages</span>
            <span className="admin-chip admin-chip--amber">Image Add/Delete Ready</span>
          </div>
        </div>

        <nav className="admin-nav">
          {adminNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={onClose}
              className={({ isActive }) => `admin-nav-link ${isActive ? "is-active" : ""}`}
            >
              <item.icon className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <span className="text-sm font-semibold text-slate-100">{item.label}</span>
                <small>{item.description}</small>
              </div>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <p>
            Public experiences remain separate. Admin pages live under <strong>src/admin</strong>.
          </p>

          <Link to={appRoutes.home} className="admin-topbar-link mt-4 w-full justify-center" onClick={onClose}>
            Open Live Site
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </aside>
    </>
  );
}
