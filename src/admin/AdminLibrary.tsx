import { useState } from "react";

import { useAdminWorkspace } from "@/admin/AdminWorkspaceContext";
import { adminPageOrder, type AdminPageId } from "@/admin/adminData";
import AdminMediaManager from "@/admin/components/AdminMediaManager";
import AdminPageHeading from "@/admin/components/AdminPageHeading";

export default function AdminLibrary() {
  const { drafts, mediaLibrary } = useAdminWorkspace();
  const [activeId, setActiveId] = useState<AdminPageId>("home");

  const orderedDrafts = adminPageOrder
    .map((pageId) => drafts.find((draft) => draft.id === pageId))
    .filter((draft): draft is NonNullable<(typeof drafts)[number]> => Boolean(draft));

  const totalImages = Object.values(mediaLibrary).reduce((sum, items) => sum + items.length, 0);

  return (
    <div className="space-y-6">
      <AdminPageHeading
        eyebrow="Media"
        title="Manage pictures per page"
        description="Ito ang mas direct na media screen. Pili ka lang ng page, tapos pwede kang mag-add at mag-delete ng pictures para sa Home o anumang division page."
        aside={
          <div className="admin-inline-pills">
            <span className="admin-chip admin-chip--dark">{totalImages} Total Pictures</span>
          </div>
        }
      />

      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-overline text-slate-500">Page Filter</p>
            <h3 className="text-2xl font-black tracking-[-0.03em]">Select a page</h3>
          </div>
        </div>

        <div className="admin-page-list mt-5">
          {orderedDrafts.map((draft) => (
            <button
              key={draft.id}
              type="button"
              className={`admin-page-button ${draft.id === activeId ? "is-active" : ""}`}
              onClick={() => setActiveId(draft.id)}
            >
              <div>
                <strong>{draft.label}</strong>
                <p>{mediaLibrary[draft.id].length} pictures loaded</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <AdminMediaManager
        pageId={activeId}
        title={`${orderedDrafts.find((draft) => draft.id === activeId)?.label ?? "Page"} media`}
        description="Upload multiple images at once or remove old ones from the selected page."
      />
    </div>
  );
}
