import TradingPageBanner from "@/pages/Trading/components/common/TradingPageBanner";
import TradingSectionTitle from "@/pages/Trading/components/common/TradingSectionTitle";
import TradingProductCard from "@/pages/Trading/components/product/TradingProductCard";
import { tradingProducts } from "@/pages/Trading/data/tradingProducts";

export default function TradingProducts() {
  return (
    <>
      <TradingPageBanner
        title="Our Products"
        subtitle="Discover core industrial systems and related components designed for heavy-duty applications."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell">
          <TradingSectionTitle
            eyebrow="Product Range"
            title="Engineered solutions for barrier systems and project support"
            text="Choose from our core product lines and accessory packages."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tradingProducts.map((product, index) => (
              <TradingProductCard key={product.slug} product={product} delay={index * 0.08} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
