import { useEffect, useRef, useState } from "react";

import PageHeader from "@/components/ui/PageHeader";
import { aboutStats } from "@/data/company";
import { scrollToHash } from "@/utils/scroll";

function CountUp({
  target,
  suffix,
  duration = 1800,
}: {
  target: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) {
      return;
    }

    const steps = 60;
    const stepMs = duration / steps;
    let step = 0;
    const timer = window.setInterval(() => {
      step += 1;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(target * eased));

      if (step >= steps) {
        window.clearInterval(timer);
      }
    }, stepMs);

    return () => window.clearInterval(timer);
  }, [started, target, duration]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-700 ${
        started ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-75 opacity-0"
      }`}
    >
      {target >= 1000 ? count.toLocaleString() : count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  return (
    <section id="about" data-scroll-offset="0" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <PageHeader
              eyebrow="About Us"
              title="Who We Are"
              description="TECHNOSHINE is a diversified company operating across multiple industries in the Philippines. We bring innovation, quality craftsmanship, and dependable service to every project we undertake."
              align="left"
            />
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              From premium stone care solutions to dynamic trading operations and large-scale construction projects, we are committed to excellence in everything we do.
            </p>
            <button
              onClick={() => scrollToHash("contact")}
              className="inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-700"
            >
              Learn more about us
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-orange-100 bg-orange-50 p-6 text-center transition-all duration-300 hover:border-orange-300 hover:shadow-md"
              >
                <div className="mb-2 text-4xl font-bold text-orange-500 transition-transform duration-500 group-hover:scale-110">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
