import { useParams } from "react-router-dom";

import TradingBreadcrumb from "@/pages/Trading/components/common/TradingBreadcrumb";
import TradingPageBanner from "@/pages/Trading/components/common/TradingPageBanner";
import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import TradingProductGallery from "@/pages/Trading/components/product/TradingProductGallery";
import TradingProductSidebar from "@/pages/Trading/components/product/TradingProductSidebar";
import { getTradingProductBySlug, tradingProducts } from "@/pages/Trading/data/tradingProducts";
import { tradingRoutes } from "@/pages/Trading/tradingRoutes";
import TradingNotFound from "@/pages/Trading/TradingNotFound";

export default function TradingProductDetail() {
  const { slug } = useParams();
  const product = getTradingProductBySlug(slug);

  if (!product) {
    return <TradingNotFound />;
  }

  return (
    <>
      <TradingPageBanner
        title={product.name}
        subtitle={product.description}
        image={product.image}
      />

      <section className="page-padding">
        <div className="container-shell">
          <TradingBreadcrumb
            items={[
              { label: "Products", to: tradingRoutes.products },
              { label: product.name },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
            <TradingReveal>
              <TradingProductSidebar products={tradingProducts} currentSlug={product.slug} />
            </TradingReveal>

            <div className="space-y-10">
              <TradingReveal>
                <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-500">
                    {product.category}
                  </p>
                  <h2 className="mt-3 text-3xl font-bold">{product.name}</h2>
                  <p className="mt-5 leading-8 text-slate-600">{product.details}</p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {product.specs.map((spec, index) => (
                      <TradingReveal key={spec} delay={index * 0.06}>
                        <div className="rounded-2xl bg-slate-100 px-4 py-4 text-sm font-medium text-slate-700">
                          {spec}
                        </div>
                      </TradingReveal>
                    ))}
                  </div>
                </div>
              </TradingReveal>

              <TradingProductGallery images={product.gallery} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
