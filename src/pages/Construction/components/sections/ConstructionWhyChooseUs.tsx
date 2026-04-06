import ConstructionContainer from "@/pages/Construction/components/common/ConstructionContainer";
import ConstructionSectionTitle from "@/pages/Construction/components/common/ConstructionSectionTitle";

const points = [
  "30+ years of industry experience",
  "Quality-focused project execution",
  "Skilled workmanship and premium finishing",
  "Responsive planning and client coordination",
  "Trusted by commercial, residential, and institutional clients",
  "Strong background in stone restoration and modular construction",
] as const;

export default function ConstructionWhyChooseUs() {
  return (
    <section className="bg-slate-950 py-24 text-white">
      <ConstructionContainer className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <ConstructionSectionTitle
            eyebrow="Why Choose Us"
            title="A trusted construction partner for projects that demand quality, durability, and detail."
            text="Technoshine combines technical expertise, disciplined execution, and premium finishing standards in every project."
            titleClassName="text-white"
            textClassName="text-slate-300"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {points.map((point) => (
            <div
              key={point}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <p className="text-lg font-semibold leading-8 text-slate-100">{point}</p>
            </div>
          ))}
        </div>
      </ConstructionContainer>
    </section>
  );
}
