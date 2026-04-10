import { ArrowUpRight, Images, LayoutPanelTop, PencilLine } from "lucide-react";
import { Link } from "react-router-dom";

import { useAdminWorkspace } from "@/admin/AdminWorkspaceContext";
import AdminPageHeading from "@/admin/components/AdminPageHeading";
import { adminPageOrder } from "@/admin/adminData";
import { appRoutes } from "@/utils/routes";

export default function AdminOverview() {
  const { drafts, mediaLibrary } = useAdminWorkspace();
  const orderedDrafts = adminPageOrder
    .map((pageId) => drafts.find((draft) => draft.id === pageId))
    .filter((draft): draft is NonNullable<(typeof drafts)[number]> => Boolean(draft));

  const totalImages = Object.values(mediaLibrary).reduce((sum, items) => sum + items.length, 0);
  const localUploads = Object.values(mediaLibrary).reduce(
    (sum, items) => sum + items.filter((item) => item.source === "upload").length,
    0,
  );
  const readyPages = orderedDrafts.filter((draft) => draft.status === "Ready").length;
  const reviewPages = orderedDrafts.filter((draft) => draft.status === "In Review").length;

  return (
    <div className="space-y-6">
      <AdminPageHeading
        eyebrow="Dashboard"
        title="Content and media control"
        description="Mas simple na dashboard ito for daily admin work. Makikita mo rito agad ang page status, image counts, at direct links papunta sa content at media management."
        aside={
          <div className="admin-inline-pills">
            <span className="admin-chip admin-chip--dark">4 Pages Managed</span>
            <span className="admin-chip admin-chip--amber">{totalImages} Pictures Loaded</span>
          </div>
        }
      />

      <section className="admin-summary-grid">
        <article className="admin-summary-card">
          <p className="admin-overline text-slate-500">Pages</p>
          <p className="admin-summary-value">{orderedDrafts.length}</p>
          <p className="admin-summary-note">Editable page groups inside the admin workspace.</p>
        </article>

        <article className="admin-summary-card">
          <p className="admin-overline text-slate-500">Total Pictures</p>
          <p className="admin-summary-value">{totalImages}</p>
          <p className="admin-summary-note">Current media count across Home, Trading, Construction, and Stonecare.</p>
        </article>

        <article className="admin-summary-card">
          <p className="admin-overline text-slate-500">Local Uploads</p>
          <p className="admin-summary-value">{localUploads}</p>
          <p className="admin-summary-note">Images added in the current browser session.</p>
        </article>

        <article className="admin-summary-card">
          <p className="admin-overline text-slate-500">Ready / Review</p>
          <p className="admin-summary-value">
            {readyPages}/{reviewPages}
          </p>
          <p className="admin-summary-note">Ready pages versus pages currently under review.</p>
        </article>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <p className="admin-overline text-slate-500">Page Manager</p>
              <h3 className="text-2xl font-black tracking-[-0.03em]">Managed pages</h3>
            </div>

            <div className="admin-toolbar">
              <Link to={appRoutes.adminStudio} className="admin-btn admin-btn--primary">
                <PencilLine className="h-4 w-4" />
                Open Studio
              </Link>
            </div>
          </div>

          <div className="admin-table mt-5">
            <div className="admin-table-head">
              <span>Page</span>
              <span>Route</span>
              <span>Pictures</span>
              <span>Status</span>
              <span>Actions</span>
            </div>

            {orderedDrafts.map((draft) => {
              const pageImages = mediaLibrary[draft.id].length;

              return (
                <div key={draft.id} className="admin-table-row">
                  <div>
                    <strong>{draft.label}</strong>
                    <p className="admin-table-subtext">{draft.focus}</p>
                  </div>
                  <code className="admin-route">{draft.route}</code>
                  <span className="admin-table-count">{pageImages}</span>
                  <span className={`admin-status-pill is-${draft.status.toLowerCase().replace(/\s+/g, "-")}`}>
                    {draft.status}
                  </span>
                  <div className="admin-actions">
                    <Link to={appRoutes.adminStudio} className="admin-table-link">
                      Edit
                    </Link>
                    <Link to={draft.route} className="admin-table-link">
                      View
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <p className="admin-overline text-slate-500">Quick Access</p>
              <h3 className="text-2xl font-black tracking-[-0.03em]">Admin actions</h3>
            </div>
          </div>

          <div className="admin-stack mt-5">
            <Link to={appRoutes.adminStudio} className="admin-quick-card">
              <div className="admin-quick-icon">
                <LayoutPanelTop className="h-5 w-5" />
              </div>
              <div>
                <strong>Content Studio</strong>
                <p>Edit headlines, CTA labels, and page copy.</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </Link>

            <Link to={appRoutes.adminLibrary} className="admin-quick-card">
              <div className="admin-quick-icon">
                <Images className="h-5 w-5" />
              </div>
              <div>
                <strong>Media Manager</strong>
                <p>Add or delete pictures per page, including Home.</p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>

          <div className="admin-mini-grid mt-5">
            {orderedDrafts.map((draft) => (
              <article key={draft.id} className="admin-mini-card">
                <div className="flex items-center justify-between gap-3">
                  <strong>{draft.label}</strong>
                  <span className="admin-mini-count">{mediaLibrary[draft.id].length}</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-600">{draft.updatedAt}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
