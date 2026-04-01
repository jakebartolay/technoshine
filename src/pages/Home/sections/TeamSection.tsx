import { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import PageHeader from "@/components/ui/PageHeader";
import { teamMembers } from "@/data/team";

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
  const total = teamMembers.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const previous = () => setCurrent((value) => (value - 1 + total) % total);
  const next = () => setCurrent((value) => (value + 1) % total);

  useEffect(() => {
    if (paused) {
      return;
    }

    timerRef.current = setInterval(() => setCurrent((value) => (value + 1) % total), 3500);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [paused, total]);

  return (
    <section
      id="team"
      data-scroll-offset="0"
      className="flex min-h-screen items-center overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#fff7ed_48%,#ffffff_100%)] py-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto w-full max-w-5xl px-6">
        <PageHeader
          eyebrow="Our People"
          title="Meet the Team"
          description="The dedicated people behind TECHNOSHINE, driving excellence across every division."
          className="mb-8"
        />

        <div className="relative mx-auto -mt-12 max-w-6xl">
          <button
            type="button"
            onClick={previous}
            className="absolute left-4 top-[54%] z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-white/95 text-gray-700 shadow-[0_16px_32px_rgba(15,23,42,0.18)] transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white md:flex"
            aria-label="Previous team member"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={next}
            className="absolute right-4 top-[54%] z-40 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-white/95 text-gray-700 shadow-[0_16px_32px_rgba(15,23,42,0.18)] transition-all duration-200 hover:border-orange-500 hover:bg-orange-500 hover:text-white md:flex"
            aria-label="Next team member"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative h-[520px] overflow-hidden md:h-[590px]">
            {teamMembers.map((member, index) => {
              const offset = getOffset(index, current, total);
              const presentation = getCardPresentation(offset);
              const isCenter = offset === 0;
              const isSide = Math.abs(offset) === 1;

              return (
                <article
                  key={member.name}
                  onClick={() => {
                    if (offset < 0) {
                      previous();
                    }

                    if (offset > 0) {
                      next();
                    }
                  }}
                  className={`group absolute left-1/2 top-1/2 overflow-hidden rounded-[2rem] bg-gray-950 text-left transition-[transform,opacity,box-shadow,filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isCenter
                      ? "z-20 cursor-default shadow-[0_24px_70px_rgba(251,146,60,0.24)] ring-2 ring-orange-400 hover:shadow-[0_30px_80px_rgba(0,0,0,0.42)]"
                      : isSide
                        ? "z-10 hidden cursor-pointer shadow-[0_16px_40px_rgba(15,23,42,0.16)] hover:shadow-[0_26px_70px_rgba(0,0,0,0.45)] md:block"
                        : "pointer-events-none z-0 hidden opacity-0 md:block"
                  }`}
                  style={{
                    width: presentation.width,
                    height: presentation.height,
                    opacity: presentation.opacity,
                    transform: presentation.transform,
                    filter: presentation.filter,
                  }}
                >
                  <div className="relative h-full w-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className={`media-stable h-full w-full object-cover object-top transition-transform duration-700 ${
                        isCenter ? "scale-100 group-hover:scale-105" : "scale-105 group-hover:scale-110"
                      }`}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.18),inset_0_-80px_120px_rgba(0,0,0,0.35)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
                    <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/35 to-transparent" />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/55" />

                    <div className="absolute left-4 top-4">
                      <span
                        className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] ${
                          divisionColor[member.division] ?? divisionColor.Executive
                        }`}
                      >
                        {member.division}
                      </span>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <h3 className={`font-bold leading-tight text-white ${isCenter ? "text-2xl" : "text-lg"}`}>
                        {member.name}
                      </h3>
                      <p className={`mt-1.5 text-white/75 ${isCenter ? "text-sm" : "text-xs"}`}>{member.role}</p>
                      <div className={`mt-4 h-0.5 rounded-full bg-orange-400 ${isCenter ? "w-16" : "w-10"}`} />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="flex items-center gap-3">
                        <a
                          href={member.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-[#1877F2]"
                          aria-label={`${member.name} Facebook`}
                        >
                          <FaFacebookF className="h-4 w-4" />
                        </a>
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-[#0A66C2]"
                          aria-label={`${member.name} LinkedIn`}
                        >
                          <FaLinkedinIn className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-3 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={previous}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              aria-label="Previous team member"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-colors hover:border-orange-500 hover:bg-orange-500 hover:text-white"
              aria-label="Next team member"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {teamMembers.map((member, index) => (
            <button
              key={member.name}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-300 ${
                index === current ? "h-2.5 w-8 bg-orange-500" : "h-2.5 w-2.5 bg-gray-300 hover:bg-orange-300"
              }`}
              aria-label={`Go to ${member.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function getOffset(index: number, current: number, total: number) {
  const forward = (index - current + total) % total;
  const backward = forward - total;

  return Math.abs(forward) <= Math.abs(backward) ? forward : backward;
}

function getCardPresentation(offset: number) {
  if (offset === 0) {
    return {
      width: "min(82vw, 27rem)",
      height: "29rem",
      opacity: 1,
      filter: "blur(0px)",
      transform: "translate(-50%, -50%) translateX(0rem) scale(1)",
    };
  }

  if (offset === -1) {
    return {
      width: "min(22vw, 17rem)",
      height: "24rem",
      opacity: 0.72,
      filter: "blur(0.3px)",
      transform: "translate(-50%, -50%) translateX(calc(-1 * clamp(12rem, 21vw, 18rem))) scale(0.88)",
    };
  }

  if (offset === 1) {
    return {
      width: "min(22vw, 17rem)",
      height: "24rem",
      opacity: 0.72,
      filter: "blur(0.3px)",
      transform: "translate(-50%, -50%) translateX(clamp(12rem, 21vw, 18rem)) scale(0.88)",
    };
  }

  return {
    width: "min(22vw, 17rem)",
    height: "24rem",
    opacity: 0,
    filter: "blur(1px)",
    transform:
      offset < 0
        ? "translate(-50%, -50%) translateX(calc(-1 * clamp(17rem, 28vw, 24rem))) scale(0.8)"
        : "translate(-50%, -50%) translateX(clamp(17rem, 28vw, 24rem)) scale(0.8)",
  };
}
