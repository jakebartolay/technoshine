import type { ChangeEvent } from "react";
import { ImagePlus, Images, Trash2, Upload } from "lucide-react";

import { useAdminWorkspace } from "@/admin/AdminWorkspaceContext";
import type { AdminPageId } from "@/admin/adminData";

type AdminMediaManagerProps = {
  pageId: AdminPageId;
  title?: string;
  description?: string;
  onAction?: (message: string) => void;
};

export default function AdminMediaManager({
  pageId,
  title = "Pictures",
  description = "Add or remove images for the selected page.",
  onAction,
}: AdminMediaManagerProps) {
  const { drafts, mediaLibrary, removeMedia, uploadMedia } = useAdminWorkspace();
  const pageDraft = drafts.find((draft) => draft.id === pageId) ?? drafts[0];
  const items = mediaLibrary[pageId];
  const uploadInputId = `admin-upload-${pageId}`;

  const handleUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (!files.length) {
      return;
    }

    const addedCount = await uploadMedia(pageId, files);

    if (addedCount > 0) {
      onAction?.(`${addedCount} image${addedCount > 1 ? "s" : ""} added to ${pageDraft.label}.`);
    }

    event.target.value = "";
  };

  const handleRemove = (mediaId: string, name: string) => {
    removeMedia(pageId, mediaId);
    onAction?.(`${name} removed from ${pageDraft.label}.`);
  };

  return (
    <section className="admin-panel">
      <div className="admin-panel-header">
        <div>
          <p className="admin-overline text-slate-500">Media Manager</p>
          <h3 className="text-2xl font-black tracking-[-0.03em]">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
        </div>

        <div className="admin-toolbar">
          <div className="admin-toolbar-stat">
            <Images className="h-4 w-4" />
            <span>{items.length} files</span>
          </div>

          <label htmlFor={uploadInputId} className="admin-btn admin-btn--primary">
            <ImagePlus className="h-4 w-4" />
            Add Picture
          </label>
          <input
            id={uploadInputId}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </div>

      {items.length ? (
        <div className="admin-media-grid mt-5">
          {items.map((item) => (
            <article key={item.id} className="admin-media-card">
              <div className="admin-media-thumb-wrap">
                <img src={item.src} alt={item.name} className="admin-media-thumb" />
              </div>

              <div className="admin-media-meta">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.slot}</p>
                  </div>
                  <span className={`admin-badge-soft ${item.source === "upload" ? "is-upload" : ""}`}>
                    {item.source === "upload" ? "Local Upload" : "Existing"}
                  </span>
                </div>

                <div className="admin-media-footer">
                  <span className="admin-muted">{item.sizeLabel}</span>
                  <button
                    type="button"
                    className="admin-icon-button admin-danger-button"
                    onClick={() => handleRemove(item.id, item.name)}
                    aria-label={`Delete ${item.name}`}
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="admin-empty mt-5">
          <Upload className="h-8 w-8 text-slate-400" />
          <div>
            <strong>No pictures yet for {pageDraft.label}</strong>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Add images here and you can delete them anytime within the current admin session.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
