const team = [
  {
    name: "Erwin Torrefiel",
    role: "Managing Director",
    division: "Executive",
    img: "teams/erwin.png",
  },
  {
    name: "Jo Torrefiel",
    role: "Head of Operations",
    division: "Coo",
    img: "test.jpg",
  },
  {
    name: "RICH NICOLLIE TORREFIEL",
    role: "President",
    division: "President",
    img: "teams/dj.png",
  },
  {
    name: "Mary-Lou Robellon",
    role: "Excutive Manager",
    division: "Manager",
    img: "teams/mary-lou.png",
  },
  {
    name: "Mark Antony Daga",
    role: "Technical Manager",
    division: "Stonecare",
    img: "teams/mark.png",
  },
  {
    name: "Monica Mangilit",
    role: "Trading",
    division: "Trading",
    img: "teams/monica.png",
  },
];

import { useState, useEffect, useRef } from "react";

const divisionColor: Record<string, string> = {
  Executive: "bg-gray-700 text-white",
  Operations: "bg-orange-500 text-white",
  StoneCare: "bg-orange-400 text-white",
  Trading: "bg-amber-500 text-white",
  Construction: "bg-yellow-500 text-white",
};

export default function TeamSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = team.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => setCurrent((c) => (c + 1) % total), 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, total]);

  // Visible indices: center ± 1 on desktop (3 cards), just center on mobile
  const getVisible = () => {
    return [
      (current - 1 + total) % total,
      current,
      (current + 1) % total,
    ];
  };
  const visible = getVisible();

  return (
    <section
      id="team"
      className="py-20 bg-gray-50 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Our People
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            The dedicated people behind <b className="text-black">TECHNOSHINE</b> — driving excellence across every division.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Cards */}
          <div className="flex items-center justify-center gap-6">
            {visible.map((memberIdx, pos) => {
              const member = team[memberIdx];
              const isCenter = pos === 1;
              return (
                <div
                  key={memberIdx}
                  onClick={() => !isCenter && (pos === 0 ? prev() : next())}
                  className={`relative rounded-2xl overflow-hidden shadow-md transition-all duration-500 flex-shrink-0 cursor-pointer select-none
                    ${isCenter
                      ? "w-72 md:w-80 scale-100 shadow-xl ring-2 ring-orange-400 z-10"
                      : "w-56 md:w-64 scale-90 opacity-60 hover:opacity-80 hidden md:block"
                    }`}
                >
                  {/* Photo */}
                  <div className="relative overflow-hidden" style={{ height: isCenter ? 340 : 280 }}>
                    <img
                      src={member.img}
                      alt={member.name}
                      className={`w-full h-full object-cover object-top transition-transform duration-700 ${isCenter ? "scale-100" : "scale-105"}`}
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Division badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${divisionColor[member.division]}`}>
                        {member.division}
                      </span>
                    </div>

                    {/* Name over image bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-bold text-lg leading-snug">{member.name}</h3>
                      <p className="text-white/70 text-sm mt-0.5">{member.role}</p>
                      {isCenter && (
                        <div className="mt-3 h-0.5 w-10 rounded-full bg-orange-400" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-11 h-11 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200 z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {team.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-orange-500 w-6 h-2.5"
                  : "bg-gray-300 hover:bg-orange-300 w-2.5 h-2.5"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
