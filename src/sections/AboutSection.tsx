import { useState, useEffect, useRef } from "react";

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;

    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const stepMs = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setCount(Math.round(target * eased));
      if (step >= steps) clearInterval(timer);
    }, stepMs);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return <span ref={ref}>{target >= 1000 ? count.toLocaleString() : count}{suffix}</span>;
}

export default function AboutSection() {
  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { target: 30, suffix: "+", label: "Years of Experience" },
    { target: 5000, suffix: "+", label: "Projects Completed" },
    { target: 100, suffix: "%", label: "Client Satisfaction" },
    { target: 3, suffix: "+", label: "Business Divisions" },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Who We Are
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              <b>TECHNOSHINE</b> is a diversified company operating across multiple industries in the Philippines. We bring innovation, quality craftsmanship, and unmatched service to every project we undertake.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From premium stone care solutions to dynamic trading operations and large-scale construction projects, we are committed to excellence in everything we do.
            </p>
            <a
              href="#contact"
              onClick={handleLearnMoreClick}
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-700 transition-colors"
            >
              Learn more about us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-orange-50 rounded-2xl p-6 text-center border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all duration-300 group">
                <div className="text-4xl font-bold text-orange-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
