import {
  adminInitialMediaLibrary,
  adminStudioSeeds,
  type AdminGalleryMeta,
  type AdminMediaItem,
  type AdminPageId,
  type AdminPortfolioMeta,
  type AdminStudioDraft,
} from "@/admin/adminData";

const ADMIN_WORKSPACE_STORAGE_KEY = "technoshine-admin-workspace-v1";
const ADMIN_WORKSPACE_EVENT = "technoshine-admin-workspace-updated";

type AdminWorkspaceSnapshot = {
  drafts: AdminStudioDraft[];
  mediaLibrary: Record<AdminPageId, AdminMediaItem[]>;
};

export type HomePortfolioProject = AdminPortfolioMeta & {
  image: string;
};

export type StonecareGalleryProject = AdminGalleryMeta & {
  src: string;
};

function isBrowser() {
  return typeof window !== "undefined";
}

export function createDefaultAdminWorkspaceSnapshot(): AdminWorkspaceSnapshot {
  return {
    drafts: JSON.parse(JSON.stringify(adminStudioSeeds)) as AdminStudioDraft[],
    mediaLibrary: JSON.parse(
      JSON.stringify(adminInitialMediaLibrary),
    ) as Record<AdminPageId, AdminMediaItem[]>,
  };
}

export function loadAdminWorkspaceSnapshot(): AdminWorkspaceSnapshot {
  if (!isBrowser()) {
    return createDefaultAdminWorkspaceSnapshot();
  }

  try {
    const raw = window.localStorage.getItem(ADMIN_WORKSPACE_STORAGE_KEY);

    if (!raw) {
      return createDefaultAdminWorkspaceSnapshot();
    }

    const parsed = JSON.parse(raw) as Partial<AdminWorkspaceSnapshot>;

    if (!parsed || !Array.isArray(parsed.drafts) || !parsed.mediaLibrary) {
      return createDefaultAdminWorkspaceSnapshot();
    }

    return {
      drafts: parsed.drafts as AdminStudioDraft[],
      mediaLibrary: parsed.mediaLibrary as Record<AdminPageId, AdminMediaItem[]>,
    };
  } catch {
    return createDefaultAdminWorkspaceSnapshot();
  }
}

export function saveAdminWorkspaceSnapshot(snapshot: AdminWorkspaceSnapshot) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(ADMIN_WORKSPACE_STORAGE_KEY, JSON.stringify(snapshot));
  window.dispatchEvent(new CustomEvent(ADMIN_WORKSPACE_EVENT));
}

export function subscribeToAdminWorkspaceSync(callback: () => void) {
  if (!isBrowser()) {
    return () => undefined;
  }

  const onStorage = (event: StorageEvent) => {
    if (event.key === ADMIN_WORKSPACE_STORAGE_KEY) {
      callback();
    }
  };

  const onLocalUpdate = () => callback();

  window.addEventListener("storage", onStorage);
  window.addEventListener(ADMIN_WORKSPACE_EVENT, onLocalUpdate);

  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(ADMIN_WORKSPACE_EVENT, onLocalUpdate);
  };
}

export function getPublishedHomePortfolioProjects() {
  const snapshot = loadAdminWorkspaceSnapshot();

  return snapshot.mediaLibrary.home
    .filter((item) => item.placement === "home-our-work" && item.portfolioMeta)
    .map<HomePortfolioProject>((item) => ({
      ...item.portfolioMeta!,
      image: item.src,
    }));
}

export function getPublishedStonecareGalleryProjects() {
  const snapshot = loadAdminWorkspaceSnapshot();

  return snapshot.mediaLibrary.stonecare
    .filter((item) => item.placement === "stonecare-gallery" && item.galleryMeta)
    .map<StonecareGalleryProject>((item) => ({
      ...item.galleryMeta!,
      src: item.src,
    }));
}
