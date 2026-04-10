import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

import {
  createDefaultAdminWorkspaceSnapshot,
  loadAdminWorkspaceSnapshot,
  saveAdminWorkspaceSnapshot,
} from "@/admin/adminPersistence";
import {
  type AdminGalleryMeta,
  type AdminMediaItem,
  type AdminPageId,
  type AdminPortfolioMeta,
  type AdminStudioDraft,
} from "@/admin/adminData";

type EditableStudioField =
  | "status"
  | "eyebrow"
  | "title"
  | "description"
  | "primaryCta"
  | "secondaryCta";

type AdminWorkspaceContextValue = {
  drafts: AdminStudioDraft[];
  mediaLibrary: Record<AdminPageId, AdminMediaItem[]>;
  updateDraft: <K extends EditableStudioField>(
    pageId: AdminPageId,
    field: K,
    value: AdminStudioDraft[K],
  ) => void;
  uploadMedia: (pageId: AdminPageId, files: File[]) => Promise<number>;
  removeMedia: (pageId: AdminPageId, mediaId: string) => void;
  resetWorkspace: () => void;
};

const AdminWorkspaceContext = createContext<AdminWorkspaceContextValue | null>(null);

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) {
    return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
        return;
      }

      reject(new Error("Could not read file."));
    };

    reader.onerror = () => reject(reader.error ?? new Error("Could not read file."));
    reader.readAsDataURL(file);
  });
}

function formatTitleFromFilename(filename: string) {
  return filename
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function buildUploadMeta(pageId: AdminPageId, title: string) {
  if (pageId === "home") {
    const portfolioMeta: AdminPortfolioMeta = {
      title,
      year: String(new Date().getFullYear()),
      description: "Admin uploaded project image shown inside the TECHNOSHINE Our Work section.",
      highlights: ["Admin Upload", "Live on Homepage", "Our Work"],
      category: "Technoshine",
      categoryBadgeClass: "bg-orange-100 text-orange-700",
      categorySolidClass: "bg-orange-500 text-white",
    };

    return {
      slot: "Our Work",
      placement: "home-our-work" as const,
      portfolioMeta,
    };
  }

  if (pageId === "stonecare") {
    const galleryMeta: AdminGalleryMeta = {
      title,
      category: "Uploaded",
      description: "Admin uploaded image shown inside the Stonecare project gallery.",
    };

    return {
      slot: "Project Gallery",
      placement: "stonecare-gallery" as const,
      galleryMeta,
    };
  }

  return {
    slot: "Page Media",
    placement: "page-media" as const,
  };
}

export function AdminWorkspaceProvider({ children }: PropsWithChildren) {
  const initialSnapshot = loadAdminWorkspaceSnapshot();
  const [drafts, setDrafts] = useState(initialSnapshot.drafts);
  const [mediaLibrary, setMediaLibrary] = useState(initialSnapshot.mediaLibrary);

  useEffect(() => {
    saveAdminWorkspaceSnapshot({ drafts, mediaLibrary });
  }, [drafts, mediaLibrary]);

  const updateDraft = <K extends EditableStudioField>(
    pageId: AdminPageId,
    field: K,
    value: AdminStudioDraft[K],
  ) => {
    setDrafts((current) =>
      current.map((draft) =>
        draft.id === pageId
          ? {
              ...draft,
              [field]: value,
              updatedAt: "Updated just now",
            }
          : draft,
      ),
    );
  };

  const uploadMedia = async (pageId: AdminPageId, files: File[]) => {
    if (!files.length) {
      return 0;
    }

    const uploadedItems = await Promise.all(
      files.map(async (file, index) => {
        const title = formatTitleFromFilename(file.name);
        const src = await fileToDataUrl(file);
        const meta = buildUploadMeta(pageId, title);

        return {
          id: `${pageId}-upload-${Date.now()}-${index}`,
          pageId,
          name: title,
          src,
          source: "upload" as const,
          sizeLabel: formatFileSize(file.size),
          ...meta,
        };
      }),
    );

    setMediaLibrary((current) => ({
      ...current,
      [pageId]: [...uploadedItems, ...current[pageId]],
    }));

    setDrafts((current) =>
      current.map((draft) =>
        draft.id === pageId
          ? {
              ...draft,
              updatedAt: "Media updated just now",
            }
          : draft,
      ),
    );

    return uploadedItems.length;
  };

  const removeMedia = (pageId: AdminPageId, mediaId: string) => {
    setMediaLibrary((current) => ({
      ...current,
      [pageId]: current[pageId].filter((item) => item.id !== mediaId),
    }));

    setDrafts((current) =>
      current.map((draft) =>
        draft.id === pageId
          ? {
              ...draft,
              updatedAt: "Media updated just now",
            }
          : draft,
      ),
    );
  };

  const resetWorkspace = () => {
    const snapshot = createDefaultAdminWorkspaceSnapshot();
    setDrafts(snapshot.drafts);
    setMediaLibrary(snapshot.mediaLibrary);
  };

  return (
    <AdminWorkspaceContext.Provider
      value={{
        drafts,
        mediaLibrary,
        updateDraft,
        uploadMedia,
        removeMedia,
        resetWorkspace,
      }}
    >
      {children}
    </AdminWorkspaceContext.Provider>
  );
}

export function useAdminWorkspace() {
  const context = useContext(AdminWorkspaceContext);

  if (!context) {
    throw new Error("useAdminWorkspace must be used within AdminWorkspaceProvider");
  }

  return context;
}
