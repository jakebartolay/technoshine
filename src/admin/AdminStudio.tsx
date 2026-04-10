import { useState } from "react";
import { Eye, Images, Save, Send } from "lucide-react";

import { useAdminWorkspace } from "@/admin/AdminWorkspaceContext";
import type { AdminPageId, AdminStudioStatus } from "@/admin/adminData";
import { adminPageOrder } from "@/admin/adminData";
import AdminMediaManager from "@/admin/components/AdminMediaManager";
import AdminPageHeading from "@/admin/components/AdminPageHeading";

function getStatusClass(status: AdminStudioStatus) {
  if (status === "Ready") {
    return "is-ready";
  }

  if (status === "In Review") {
    return "is-in-review";
  }

  return "is-draft";
}

export default function AdminStudio() {
  const { drafts, mediaLibrary, updateDraft } = useAdminWorkspace();
  const [activeId, setActiveId] = useState<AdminPageId>("home");
  const [message, setMessage] = useState("Select a page, then edit copy or manage pictures.");

  const orderedDrafts = adminPageOrder
    .map((pageId) => drafts.find((draft) => draft.id === pageId))
    .filter((draft): draft is NonNullable<(typeof drafts)[number]> => Boolean(draft));

  const activeDraft = orderedDrafts.find((draft) => draft.id === activeId) ?? orderedDrafts[0];
  const imageCount = mediaLibrary[activeDraft.id].length;
  const uploadCount = mediaLibrary[activeDraft.id].filter((item) => item.source === "upload").length;

  const handleSaveDraft = () => {
    setMessage(`${activeDraft.label} draft saved in the current admin session.`);
  };

  const handleMarkReady = () => {
    updateDraft(activeDraft.id, "status", "Ready");
    setMessage(`${activeDraft.label} is now marked as Ready.`);
  };

  return (
    <div className="space-y-6">
      <AdminPageHeading
        eyebrow="Studio"
        title="Edit content per page"
        description="Mas admin-focused na ang Studio na ito: choose a page, update the text, then add or delete pictures on the same workflow. Kasama na rito ang Home."
      />

      <section className="admin-panel">
        <div className="admin-panel-header">
          <div>
            <p className="admin-overline text-slate-500">Pages</p>
            <h3 className="text-2xl font-black tracking-[-0.03em]">Choose what to manage</h3>
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
                <p>{draft.focus}</p>
              </div>
              <span className={`admin-status-pill ${getStatusClass(draft.status)}`}>{draft.status}</span>
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <section className="admin-panel">
          <div className="admin-panel-header">
            <div>
              <p className="admin-overline text-slate-500">Content Form</p>
              <h3 className="text-2xl font-black tracking-[-0.03em]">{activeDraft.label} page</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">Owner: {activeDraft.owner}</p>
            </div>

            <span className={`admin-status-pill ${getStatusClass(activeDraft.status)}`}>
              {activeDraft.status}
            </span>
          </div>

          <div className="admin-inline-stats mt-5">
            <div className="admin-toolbar-stat">
              <span>{activeDraft.route}</span>
            </div>
            <div className="admin-toolbar-stat">
              <Images className="h-4 w-4" />
              <span>{imageCount} pictures</span>
            </div>
            <div className="admin-toolbar-stat">
              <span>{uploadCount} local uploads</span>
            </div>
          </div>

          <div className="admin-form-grid mt-5">
            <div className="admin-field">
              <label htmlFor="studio-status">Status</label>
              <select
                id="studio-status"
                className="admin-select"
                value={activeDraft.status}
                onChange={(event) =>
                  updateDraft(activeDraft.id, "status", event.target.value as AdminStudioStatus)
                }
              >
                <option>Draft</option>
                <option>In Review</option>
                <option>Ready</option>
              </select>
            </div>

            <div className="admin-field">
              <label htmlFor="studio-eyebrow">Eyebrow</label>
              <input
                id="studio-eyebrow"
                className="admin-input"
                value={activeDraft.eyebrow}
                onChange={(event) => updateDraft(activeDraft.id, "eyebrow", event.target.value)}
              />
            </div>
          </div>

          <div className="admin-field mt-4">
            <label htmlFor="studio-title">Headline</label>
            <textarea
              id="studio-title"
              className="admin-textarea"
              value={activeDraft.title}
              onChange={(event) => updateDraft(activeDraft.id, "title", event.target.value)}
            />
          </div>

          <div className="admin-field mt-4">
            <label htmlFor="studio-description">Supporting copy</label>
            <textarea
              id="studio-description"
              className="admin-textarea"
              value={activeDraft.description}
              onChange={(event) => updateDraft(activeDraft.id, "description", event.target.value)}
            />
          </div>

          <div className="admin-form-grid mt-4">
            <div className="admin-field">
              <label htmlFor="studio-primary">Primary CTA</label>
              <input
                id="studio-primary"
                className="admin-input"
                value={activeDraft.primaryCta}
                onChange={(event) => updateDraft(activeDraft.id, "primaryCta", event.target.value)}
              />
            </div>

            <div className="admin-field">
              <label htmlFor="studio-secondary">Secondary CTA</label>
              <input
                id="studio-secondary"
                className="admin-input"
                value={activeDraft.secondaryCta}
                onChange={(event) => updateDraft(activeDraft.id, "secondaryCta", event.target.value)}
              />
            </div>
          </div>

          <div className="admin-form-actions mt-5">
            <button type="button" className="admin-btn admin-btn--primary" onClick={handleSaveDraft}>
              <Save className="h-4 w-4" />
              Save Draft
            </button>
            <button type="button" className="admin-btn admin-btn--ghost" onClick={handleMarkReady}>
              <Send className="h-4 w-4" />
              Mark Ready
            </button>
          </div>

          <div className="admin-message mt-5">{message}</div>
        </section>

        <div className="space-y-6">
          <section className="admin-panel">
            <div className="admin-panel-header">
              <div>
                <p className="admin-overline text-slate-500">Preview</p>
                <h3 className="text-2xl font-black tracking-[-0.03em]">Current hero view</h3>
              </div>
              <Eye className="h-5 w-5 text-slate-400" />
            </div>

            <div className="admin-preview-stage mt-5">
              <div className="admin-preview-card">
                <span className="admin-preview-badge">{activeDraft.eyebrow}</span>
                <h4 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950">
                  {activeDraft.title}
                </h4>
                <p className="mt-4 text-sm leading-7 text-slate-600">{activeDraft.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white">
                    {activeDraft.primaryCta}
                  </span>
                  <span className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700">
                    {activeDraft.secondaryCta}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <AdminMediaManager
            pageId={activeDraft.id}
            title={`${activeDraft.label} pictures`}
            description="Upload new page images or delete existing ones directly from this screen."
            onAction={setMessage}
          />
        </div>
      </div>
    </div>
  );
}
