import { useState } from "react";
import { RefreshCcw, ShieldCheck, SquareStack, Wrench } from "lucide-react";

import { useAdminWorkspace } from "@/admin/AdminWorkspaceContext";
import AdminPageHeading from "@/admin/components/AdminPageHeading";

export default function AdminSettings() {
  const { drafts, mediaLibrary, resetWorkspace } = useAdminWorkspace();
  const [message, setMessage] = useState("Workspace is active and ready.");

  const totalImages = Object.values(mediaLibrary).reduce((sum, items) => sum + items.length, 0);
  const totalUploads = Object.values(mediaLibrary).reduce(
    (sum, items) => sum + items.filter((item) => item.source === "upload").length,
    0,
  );

  const handleReset = () => {
    resetWorkspace();
    setMessage("Admin session reset to the default content and image set.");
  };

  return (
    <div className="space-y-6">
      <AdminPageHeading
        eyebrow="Workspace"
        title="Session controls"
        description="Simplified admin utilities ito. Dito mo makikita ang current session state at puwede mong i-reset ang local content at uploaded images kapag gusto mong magsimula ulit."
      />

      <section className="admin-system-grid">
        <article className="admin-system-card">
          <ShieldCheck className="h-5 w-5 text-emerald-500" />
          <strong>Mode</strong>
          <p>Local admin prototype</p>
        </article>

        <article className="admin-system-card">
          <SquareStack className="h-5 w-5 text-sky-500" />
          <strong>Managed pages</strong>
          <p>{drafts.length} active page groups</p>
        </article>

        <article className="admin-system-card">
          <Wrench className="h-5 w-5 text-orange-500" />
          <strong>Picture tools</strong>
          <p>{totalImages} total pictures, {totalUploads} local uploads</p>
        </article>
      </section>

      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-overline text-slate-500">Reset Tools</p>
            <h3 className="text-2xl font-black tracking-[-0.03em]">Start over locally</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              This does not touch your source files. It only resets the current admin session state.
            </p>
          </div>
        </div>

        <div className="admin-reset-box mt-5">
          <div>
            <strong>Reset content and pictures</strong>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Remove local uploads, restore the default seeded pictures, and return all content drafts to their starting values.
            </p>
          </div>

          <button type="button" className="admin-btn admin-btn--ghost" onClick={handleReset}>
            <RefreshCcw className="h-4 w-4" />
            Reset Admin Session
          </button>
        </div>

        <div className="admin-message mt-5">{message}</div>
      </section>
    </div>
  );
}
