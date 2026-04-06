import { useState } from "react";

import TradingPageBanner from "@/pages/Trading/components/common/TradingPageBanner";
import TradingReveal from "@/pages/Trading/components/common/TradingReveal";
import TradingSectionTitle from "@/pages/Trading/components/common/TradingSectionTitle";
import { tradingFaq } from "@/pages/Trading/data/tradingFaq";

export default function TradingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <TradingPageBanner
        title="Frequently Asked Questions"
        subtitle="Helpful answers about orders, customization, technical support, and project coordination."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="page-padding">
        <div className="container-shell max-w-4xl">
          <TradingSectionTitle
            eyebrow="FAQ"
            title="Answers to common client questions"
            text="Here are some of the questions we usually receive from project teams and buyers."
            center
          />

          <div className="mt-12 space-y-4">
            {tradingFaq.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <TradingReveal key={item.question} delay={index * 0.06}>
                  <div className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                    >
                      <span className="text-lg font-semibold text-slate-900">{item.question}</span>
                      <span className="text-2xl font-light text-orange-500">
                        {isOpen ? "-" : "+"}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 leading-7 text-slate-600">{item.answer}</p>
                      </div>
                    ) : null}
                  </div>
                </TradingReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
