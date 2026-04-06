import ConstructionContactPreview from "@/pages/Construction/components/sections/ConstructionContactPreview";
import ConstructionPageBanner from "@/pages/Construction/components/layout/ConstructionPageBanner";
import { constructionAssets } from "@/pages/Construction/constructionAssets";

export default function ConstructionContact() {
  return (
    <>
      <ConstructionPageBanner
        title="Contact Technoshine"
        subtitle="Discuss your construction, renovation, finishing, or modular project with our team."
        image={constructionAssets.supplyInstall}
      />
      <ConstructionContactPreview />
    </>
  );
}
